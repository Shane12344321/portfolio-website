"use strict";

const $ = selector => document.querySelector(selector);
const data = window.ATLAS_DATA;
const model = window.AtlasModel;
// answers-compiler.js loads async, so questions can render before it arrives.
let answers = window.ATLAS_COMPILER_ANSWERS;

if (data?.subjects?.length && model) initialize();
else $("#results").textContent = "The question index could not be loaded. Reopen the archive from its full folder.";

function initialize() {
  let filters = model.selection(data, location.search);
  const subject = data.subjects[0];
  const modules = $("#modules");
  const difficulty = $("#difficulty");
  const number = new Intl.NumberFormat("en-IN");
  const guide = $("#guide");
  const viewer = $("#scan-dialog");
  const largeScan = $("#large-scan");
  const zoom = $("#scan-zoom");
  const questionsById = new Map(data.questions.map(item => [item.id, item]));
  // Cards are built once and reused, so returning to a module keeps its decoded images.
  const cards = new Map();
  const prefetched = new Set();
  let answerJumpPending = false;
  let storage;
  try { storage = window.localStorage; } catch { /* Progress remains available for this visit. */ }
  const progress = window.AtlasProgress.createProgress(data.questions, storage);

  const questionCount = (count, label = "question") => number.format(count) + " " + label + (count === 1 ? "" : "s");

  for (const level of model.DIFFICULTIES) {
    const control = button(level.label, "difficulty-button");
    control.dataset.value = level.id;
    control.addEventListener("click", () => setFilters({ ...filters, difficulty: level.id }));
    difficulty.append(control);
  }

  const moduleOptions = [...subject.modules, { id: "all", name: "All modules" }];
  if (data.questions.some(item => item.modules.includes(0))) moduleOptions.push({ id: 0, name: "Unmatched" });
  for (const option of moduleOptions) {
    const isModule = typeof option.id === "number" && option.id > 0;
    const control = button("", "module-button");
    control.append(el("span", "module-name", isModule ? "M" + option.id : option.name), el("span", "module-progress"));
    control.dataset.value = option.id;
    control.addEventListener("mousedown", event => {
      if (event.detail > 1) event.preventDefault();
    });
    // Switch on the first click. A double-click also marks the module orange, a triple-click dark green.
    control.addEventListener("click", event => {
      setFilters({ ...filters, module: option.id });
      if (event.detail >= 2) {
        progress.markModule(subject.id, option.id, event.detail === 2 ? "orange" : "green");
        renderProgress();
      }
    });
    control.addEventListener("pointerenter", () => prefetchModule(option.id));
    control.addEventListener("focus", () => prefetchModule(option.id));
    modules.append(control);
  }

  const paperCount = number.format(data.coverage.papers);
  $("#guide-coverage").textContent = questionCount(data.questions.length) + " from " + paperCount +
    " papers. Each separately indexed subpart or option counts once.";
  for (const note of data.coverage.notes) $("#coverage-notes").append(el("p", "fine-print", note));
  $("#show-guide").addEventListener("click", () => guide.showModal());
  zoom.addEventListener("click", () => {
    const full = largeScan.classList.toggle("full");
    zoom.textContent = full ? "Fit width" : "Full size";
    zoom.setAttribute("aria-pressed", String(full));
    largeScan.scrollTo(0, 0);
  });

  window.addEventListener("popstate", () => {
    filters = model.selection(data, location.search);
    render();
    jumpToQuestion();
  });
  window.addEventListener("storage", event => {
    const prefixes = [window.AtlasProgress.STORAGE_PREFIX, window.AtlasProgress.MODULE_MARK_PREFIX];
    if (event.storageArea !== storage || (event.key !== null && !prefixes.some(prefix => event.key.startsWith(prefix)))) return;
    progress.reload();
    for (const article of cards.values()) updateQuestionProgress(article);
    renderProgress();
  });
  if (!answers) {
    $("#answers-script")?.addEventListener("load", () => {
      answers = window.ATLAS_COMPILER_ANSWERS;
      if (!answers) return;
      for (const [id, article] of cards) attachAnswer(article, questionsById.get(id));
      if (answerJumpPending) {
        answerJumpPending = false;
        jumpToQuestion();
      }
    }, { once: true });
  }
  render();
  jumpToQuestion();

  function jumpToQuestion() {
    if (!location.hash.startsWith("#question-")) return;
    const question = document.getElementById(location.hash.slice(1));
    if (!question) return;
    const openAnswer = new URLSearchParams(location.search).get("answer") === "1";
    if (openAnswer && !answers) answerJumpPending = true;
    const answer = openAnswer && question.querySelector(".model-answer");
    if (answer) {
      question.querySelector(".question-body").hidden = false;
      updateQuestionProgress(question);
      answer.open = true;
    }
    requestAnimationFrame(() => (answer || question).scrollIntoView());
  }

  function setFilters(next) {
    if (Object.keys(next).every(key => next[key] === filters[key])) return;
    const query = new URLSearchParams({
      subject: subject.id,
      module: String(next.module),
      difficulty: next.difficulty,
    });
    filters = model.selection(data, query);
    try { history.pushState(null, "", "?" + query); } catch { /* Local file access can restrict history. */ }
    render();
  }

  // Warm the first few scans of a module the pointer or focus is heading to.
  function prefetchModule(id) {
    if (prefetched.has(id)) return;
    prefetched.add(id);
    const items = model.groupQuestions(data, { ...filters, module: id }).flatMap(group => group.items);
    for (const item of items.slice(0, 4)) {
      if (cards.has(item.id) || !item.scans[0]) continue;
      const image = new Image();
      image.decoding = "async";
      image.src = item.scans[0].src;
    }
  }

  function render() {
    const module = subject.modules.find(item => item.id === filters.module);
    const groups = model.groupQuestions(data, filters);
    const total = groups.reduce((sum, group) => sum + group.items.length, 0);

    updatePressed(difficulty, filters.difficulty);
    updatePressed(modules, String(filters.module));

    $("#course-label").textContent = [subject.code, subject.name, module && "Module " + module.id].filter(Boolean).join(" / ");
    $("#module-title").textContent = module?.name ?? (filters.module === 0 ? "Unmatched questions" : "All modules");
    const syllabus = $("#syllabus");
    syllabus.hidden = !module;
    $("#syllabus-topics").replaceChildren(...(module?.topics ?? []).map(topic => el("li", "", topic)));
    $("#result-count").textContent = questionCount(total) + " shown";

    const content = [];
    const jumps = [];
    for (const { exam, items } of groups) {
      const descriptor = model.EXAMS.find(item => item.id === exam);
      const section = el("section", "exam-group");
      section.id = "group-" + exam.toLowerCase();
      section.setAttribute("aria-labelledby", section.id + "-heading");
      const heading = el("div", "exam-head");
      const h2 = el("h2", "", descriptor.label);
      h2.id = section.id + "-heading";
      h2.tabIndex = -1;
      heading.append(h2, el("p", "", descriptor.name), el("span", "exam-count", number.format(items.length)));
      section.append(heading);
      if (items.length) {
        section.append(...items.map(item => card(item, descriptor.label)));
      } else {
        const hasOtherLevels = data.questions.some(item => item.exam === exam &&
          (filters.module === "all" || item.modules.includes(filters.module)));
        const empty = el("p", "empty", hasOtherLevels ? "No questions at this difficulty." : "No questions indexed for this selection.");
        if (hasOtherLevels && filters.difficulty !== "all") {
          const clear = button("Show all levels", "guide-button");
          clear.addEventListener("click", () => {
            setFilters({ ...filters, difficulty: "all" });
            difficulty.querySelector('[data-value="all"]').focus();
          });
          empty.append(clear);
        }
        section.append(empty);
      }
      const jump = button(descriptor.label, "exam-jump");
      jump.append(el("span", "mono", number.format(items.length)));
      jump.setAttribute("aria-label", descriptor.label + ", " + questionCount(items.length));
      jump.addEventListener("click", () => {
        section.scrollIntoView();
        h2.focus({ preventScroll: true });
      });
      content.push(section);
      jumps.push(jump);
    }
    $("#exam-jumps").replaceChildren(...jumps);
    $("#results").replaceChildren(...content);
    renderProgress();
  }

  function card(item, examLabel) {
    let article = cards.get(item.id);
    if (article) updateQuestionProgress(article);
    else {
      article = questionCard(item, examLabel);
      cards.set(item.id, article);
    }
    return article;
  }

  function renderProgress() {
    for (const control of modules.children) {
      const id = control.dataset.value === "all" ? "all" : Number(control.dataset.value);
      const count = progress.summary(subject.id, id);
      const mark = progress.moduleMark(subject.id, id);
      const label = subject.modules.find(item => item.id === id);
      const name = label ? "Module " + id + " · " + label.name : control.querySelector(".module-name").textContent;
      const description = name + " · " + count.done + " of " + count.total + " questions done" +
        (mark ? " · " + (mark === "green" ? "Dark green" : "Orange") + " checklist mark" : "");
      const checked = mark === "green" || (!mark && count.complete);
      control.querySelector(".module-progress").textContent = (checked ? "✓ " : "") + count.done + "/" + count.total;
      if (mark) control.dataset.mark = mark;
      else delete control.dataset.mark;
      control.classList.toggle("is-complete", count.complete);
      control.setAttribute("aria-label", description);
      control.title = description + ". Double-click to mark orange. Triple-click to mark dark green.";
    }
    const count = progress.summary(subject.id, filters.module);
    const description = filters.module === 0 ? " without a clear match in the current syllabus" : " in the local paper collection";
    $("#module-meta").textContent = questionCount(count.total) + description + " · " + count.done + "/" + count.total + " done";
    $("#progress-status").textContent = progress.persistent
      ? "Progress saved in this browser."
      : "Browser storage is unavailable. Progress is kept for this visit.";
  }

  function updateQuestionProgress(article) {
    const done = progress.has(article.dataset.questionId);
    const wasDone = article.classList.contains("is-done");
    const body = article.querySelector(".question-body");
    body.hidden = done && (!wasDone || body.hidden);
    article.classList.toggle("is-done", done);
    article.classList.toggle("is-collapsed", body.hidden);
    const control = article.querySelector(".completion-button");
    control.textContent = done ? "✓ Done" : "Mark done";
    control.setAttribute("aria-pressed", String(done));
    control.setAttribute("aria-label", (done ? "Mark as unfinished, " : "Mark as done, ") + article.dataset.questionLabel);
    const collapse = article.querySelector(".question-collapse");
    collapse.hidden = !done;
    collapse.textContent = body.hidden ? "Show question" : "Hide question";
    collapse.setAttribute("aria-expanded", String(!body.hidden));
    collapse.setAttribute("aria-controls", body.id);
  }

  function attachAnswer(article, item) {
    const answer = answers?.[item.id];
    if (answer && !article.querySelector(".model-answer")) article.querySelector(".solution").before(modelAnswer(answer));
  }

  function questionCard(item, examLabel) {
    const article = $("#question-card").content.firstElementChild.cloneNode(true);
    article.id = "question-" + item.id;
    const paper = [examLabel, item.slot === "Unknown" ? "Slot unknown" : item.slot, item.year === "Unknown" ? "Year unknown" : item.year];
    article.dataset.questionId = item.id;
    article.dataset.questionLabel = item.label + ", " + paper.join(", ");
    const body = article.querySelector(".question-body");
    body.id = "question-body-" + item.id;
    updateQuestionProgress(article);
    article.querySelector(".question-collapse").addEventListener("click", () => {
      body.hidden = !body.hidden;
      updateQuestionProgress(article);
    });
    article.querySelector(".completion-button").addEventListener("click", () => {
      progress.toggle(item.id);
      updateQuestionProgress(article);
      renderProgress();
    });
    article.querySelector("h3").textContent = item.label;
    article.querySelector(".paper-meta").textContent = paper.join(" · ");
    const badge = article.querySelector(".difficulty-tag");
    badge.textContent = model.DIFFICULTIES.find(level => level.id === item.difficulty).label;
    badge.dataset.level = item.difficulty;
    badge.title = "Estimated difficulty";
    article.querySelector(".question-scans").append(...item.scans.map(scan => scanFigure(item, scan, "Question")));
    if (item.note) {
      const note = article.querySelector(".source-note");
      note.textContent = item.note;
      note.hidden = false;
    }
    attachAnswer(article, item);
    if (item.solutions.length) {
      const solution = article.querySelector(".solution");
      solution.hidden = false;
      function loadSolution() {
        if (!solution.open) return;
        if (item.solutionNote) solution.querySelector(".solution-scans").append(el("p", "source-note", item.solutionNote));
        solution.querySelector(".solution-scans").append(...item.solutions.map(scan => scanFigure(item, scan, "Solution")));
        solution.removeEventListener("toggle", loadSolution);
      }
      solution.addEventListener("toggle", loadSolution);
    }
    return article;
  }

  function scanFigure(item, scan, kind) {
    const label = kind + " scan for " + item.label + ", source page " + scan.page;
    const figure = el("figure", "scan-figure");
    const link = el("a", "scan-preview");
    link.href = scan.src;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", "Enlarge " + label);
    const image = el("img");
    image.width = scan.width;
    image.height = scan.height;
    image.loading = "lazy";
    image.decoding = "async";
    image.alt = label;
    image.src = scan.src;
    link.append(image);
    link.addEventListener("click", event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();
      const fullImage = image.cloneNode();
      fullImage.loading = "eager";
      largeScan.replaceChildren(fullImage);
      largeScan.classList.remove("full");
      zoom.textContent = "Full size";
      zoom.setAttribute("aria-pressed", "false");
      $("#scan-title").textContent = item.label + " · " + kind + " · p. " + scan.page;
      viewer.showModal();
      largeScan.scrollTo(0, 0);
    });
    const caption = el("figcaption", "scan-caption");
    caption.append(el("span", "", "Source p. " + scan.page), el("span", "", "Select image to enlarge ↗"));
    figure.append(link, caption);
    return figure;
  }
}

function modelAnswer(answer) {
  const details = el("details", "model-answer");
  details.append(el("summary", "", answer.sources?.length ? "Model answer · based on notes" : "Model answer"));
  // Build the body (tables, SVG diagrams, figures) only when the answer is first opened.
  details.addEventListener("toggle", function build() {
    if (!details.open) return;
    details.removeEventListener("toggle", build);
    const body = el("div", "model-answer-body");
    const sections = answer.sections ?? [
      ["Direct answer", answer.answer],
      ["Key points", answer.points],
      ["Diagram or example", answer.example],
    ];
    body.append(bulletSections([
      ...sections.filter(([, items]) => items?.length),
      ...(answer.sources?.length ? [["Notes and references", answer.sources]] : []),
    ], "h4"));
    details.append(body);
  });
  return details;
}

function bulletSections(sections, headingTag) {
  const content = document.createDocumentFragment();
  for (const [label, bullets] of sections) {
    const list = el("ul");
    for (const bullet of bullets) {
      const item = el("li");
      if (typeof bullet === "object") {
        item.className = "answer-block";
        item.append(answerBlock(bullet));
      } else if (bullet.includes("\n")) item.append(el("pre", "model-answer-code", bullet));
      else item.textContent = bullet;
      list.append(item);
    }
    content.append(el(headingTag, "", label), list);
  }
  return content;
}

// Rich answer blocks: a table, an inline SVG diagram, or a figure cropped from the notes.
function answerBlock(block) {
  const figure = el("figure", "answer-figure");
  if (block.table) {
    const wrap = el("div", "answer-table-wrap");
    const table = el("table", "answer-table");
    if (block.table.head) {
      const row = el("tr");
      for (const cell of block.table.head) row.append(el("th", "", String(cell)));
      const thead = el("thead");
      thead.append(row);
      table.append(thead);
    }
    const tbody = el("tbody");
    for (const cells of block.table.rows) {
      const row = el("tr");
      for (const cell of cells) row.append(el("td", "", String(cell)));
      tbody.append(row);
    }
    table.append(tbody);
    wrap.append(table);
    figure.append(wrap);
  } else if (block.svg) {
    const wrap = el("div", "answer-svg");
    wrap.innerHTML = block.svg;
    const svg = wrap.querySelector("svg");
    if (svg && block.alt) { svg.setAttribute("role", "img"); svg.setAttribute("aria-label", block.alt); }
    figure.append(wrap);
  } else if (block.img) {
    const link = el("a", "answer-image");
    link.href = block.img;
    link.target = "_blank";
    link.rel = "noopener";
    const image = el("img");
    image.src = block.img;
    image.alt = block.alt || block.caption || "Diagram from the notes";
    image.loading = "lazy";
    image.decoding = "async";
    if (block.width) { image.width = block.width; image.height = block.height; }
    link.append(image);
    figure.append(link);
  }
  if (block.caption) figure.append(el("figcaption", "", block.caption));
  return figure;
}

function updatePressed(group, value) {
  for (const control of group.children) control.setAttribute("aria-pressed", String(control.dataset.value === value));
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function button(text, className) {
  const control = el("button", className, text);
  control.type = "button";
  return control;
}
