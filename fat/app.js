"use strict";

const $ = selector => document.querySelector(selector);
const data = window.ATLAS_DATA;
const answersBySubject = {
  ai: window.ATLAS_AI_ANSWERS,
  cloud: window.ATLAS_CLOUD_ANSWERS,
  os: window.ATLAS_OS_ANSWERS,
  dbms: window.ATLAS_DBMS_ANSWERS,
  networks: window.ATLAS_NETWORKS_ANSWERS,
  compiler: window.ATLAS_COMPILER_ANSWERS,
};
const cloudGuides = window.ATLAS_CLOUD_GUIDES;
const model = window.AtlasModel;

if (data?.subjects?.length && model) initialize();
else $("#results").textContent = "The question index could not be loaded. Reopen the archive from its full folder.";

function initialize() {
  let filters = model.selection(data, location.search);
  const subjects = $("#subjects");
  const subjectSelect = $("#subject-select");
  const modules = $("#modules");
  const difficulty = $("#difficulty");
  const number = new Intl.NumberFormat("en-IN");
  const guide = $("#guide");
  const fatGuide = $("#fat-guide");
  const fatGuideContent = $("#fat-guide-content");
  const viewer = $("#scan-dialog");
  const largeScan = $("#large-scan");
  const zoom = $("#scan-zoom");
  const aiStudyGuide = $("#ai-study-guide");
  const dbStudyGuide = $("#db-study-guide");
  let moduleSubject = null;
  let activeFatGuide;
  let moduleClickTimer;
  let storage;
  try { storage = window.localStorage; } catch { /* Progress remains available for this visit. */ }
  const progress = window.AtlasProgress.createProgress(data.questions, storage);

  const questionCount = (count, label = "question") => number.format(count) + " " + label + (count === 1 ? "" : "s");

  for (const subject of data.subjects) {
    const control = button("", "subject-button");
    const text = el("span", "subject-name", subject.name);
    text.append(el("span", "subject-code", subject.code));
    const arrow = el("span", "subject-arrow", "↗");
    arrow.setAttribute("aria-hidden", "true");
    control.append(text, arrow);
    control.dataset.value = subject.id;
    control.addEventListener("click", () => changeSubject(subject.id));
    subjects.append(control);

    const option = el("option", "", subject.name);
    option.value = subject.id;
    subjectSelect.append(option);
  }
  subjectSelect.addEventListener("change", () => changeSubject(subjectSelect.value));

  for (const level of model.DIFFICULTIES) {
    const control = button(level.label, "difficulty-button");
    control.dataset.value = level.id;
    control.addEventListener("click", () => setFilters({ ...filters, difficulty: level.id }));
    difficulty.append(control);
  }

  const paperCount = number.format(data.coverage.papers);
  $("#subject-total").textContent = String(data.subjects.length).padStart(2, "0");
  $("#rail-foot").textContent = questionCount(data.questions.length) + " · " + paperCount + " papers";
  $("#guide-coverage").textContent = questionCount(data.questions.length) + " from " + paperCount +
    " papers across " + data.subjects.length + " subjects. Each separately indexed subpart or option counts once.";
  for (const note of data.coverage.notes) $("#coverage-notes").append(el("p", "fine-print", note));
  $("#show-guide").addEventListener("click", () => guide.showModal());
  zoom.addEventListener("click", () => {
    const full = largeScan.classList.toggle("full");
    zoom.textContent = full ? "Fit width" : "Full size";
    zoom.setAttribute("aria-pressed", String(full));
    largeScan.scrollTo(0, 0);
  });

  window.addEventListener("popstate", () => {
    clearTimeout(moduleClickTimer);
    filters = model.selection(data, location.search);
    render();
    jumpToQuestion();
  });
  window.addEventListener("storage", event => {
    const prefixes = [window.AtlasProgress.STORAGE_PREFIX, window.AtlasProgress.MODULE_MARK_PREFIX];
    if (event.storageArea !== storage || (event.key !== null && !prefixes.some(prefix => event.key.startsWith(prefix)))) return;
    progress.reload();
    for (const article of document.querySelectorAll("#results .question")) updateQuestionProgress(article);
    renderProgress();
  });
  render();
  jumpToQuestion();

  function jumpToQuestion() {
    if (!location.hash.startsWith("#question-")) return;
    const question = document.getElementById(location.hash.slice(1));
    if (!question) return;
    const openAnswer = new URLSearchParams(location.search).get("answer") === "1";
    const answer = openAnswer && question.querySelector(".model-answer");
    if (answer) {
      question.querySelector(".question-body").hidden = false;
      updateQuestionProgress(question);
      answer.open = true;
    }
    requestAnimationFrame(() => (answer || question).scrollIntoView());
  }

  function changeSubject(id) {
    if (id === filters.subject) return;
    const subject = data.subjects.find(item => item.id === id);
    setFilters({ ...filters, subject: id, module: subject.modules[0].id });
    if (window.scrollY > $("#study").offsetTop) window.scrollTo(0, 0);
  }

  function setFilters(next) {
    clearTimeout(moduleClickTimer);
    if (Object.keys(next).every(key => next[key] === filters[key])) return;
    const query = new URLSearchParams({
      subject: next.subject,
      module: String(next.module),
      difficulty: next.difficulty,
    });
    filters = model.selection(data, query);
    try { history.pushState(null, "", "?" + query); } catch { /* Local file access can restrict history. */ }
    render();
  }

  function render() {
    const subject = data.subjects.find(item => item.id === filters.subject);
    const courseQuestions = data.questions.filter(item => item.subject === subject.id);
    const module = subject.modules.find(item => item.id === filters.module);
    const groups = model.groupQuestions(data, filters);
    const total = groups.reduce((sum, group) => sum + group.items.length, 0);

    updatePressed(subjects, subject.id);
    subjectSelect.value = subject.id;
    updatePressed(difficulty, filters.difficulty);

    if (moduleSubject !== subject.id) {
      const options = [
        ...subject.modules,
        { id: "all", name: "All modules" },
      ];
      if (courseQuestions.some(item => item.modules.includes(0))) options.push({ id: 0, name: "Unmatched" });
      modules.replaceChildren(...options.map(option => {
        const isModule = typeof option.id === "number" && option.id > 0;
        const control = button("", "module-button");
        control.append(el("span", "module-name", isModule ? "M" + option.id : option.name), el("span", "module-progress"));
        control.dataset.value = option.id;
        control.addEventListener("mousedown", event => {
          if (event.detail > 1) event.preventDefault();
        });
        control.addEventListener("click", event => {
          clearTimeout(moduleClickTimer);
          if (event.detail >= 2) {
            progress.markModule(subject.id, option.id, event.detail === 2 ? "orange" : "green");
            renderProgress();
          } else {
            const next = { ...filters, module: option.id };
            if (event.detail === 0) setFilters(next);
            else moduleClickTimer = setTimeout(() => setFilters(next), 550);
          }
        });
        return control;
      }));
      moduleSubject = subject.id;
    }
    updatePressed(modules, String(filters.module));

    $("#course-label").textContent = [subject.code, subject.name, module && "Module " + module.id].filter(Boolean).join(" / ");
    $("#module-title").textContent = module?.name ?? (filters.module === 0 ? "Unmatched questions" : "All modules");
    aiStudyGuide.hidden = subject.id !== "ai";
    const guidePath = location.protocol === "file:" ? "ai/index.html" : "ai/";
    aiStudyGuide.href = guidePath + (module ? "?module=" + module.id : "");
    if (dbStudyGuide) {
      dbStudyGuide.hidden = subject.id !== "dbms";
      const dbGuidePath = location.protocol === "file:" ? "db/index.html" : "db/";
      dbStudyGuide.href = dbGuidePath + (module ? "#module-" + module.id : "");
    }
    const syllabus = $("#syllabus");
    syllabus.hidden = !module;
    $("#syllabus-topics").replaceChildren(...(module?.topics ?? []).map(topic => el("li", "", topic)));
    renderFatGuide(subject.id === "cloud" ? cloudGuides?.[module?.id] : undefined);
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
        section.append(...items.map(item => questionCard(item, descriptor.label)));
      } else {
        const hasOtherLevels = courseQuestions.some(item => item.exam === exam &&
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

  function renderProgress() {
    const subject = data.subjects.find(item => item.id === filters.subject);
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

  function renderFatGuide(nextGuide) {
    if (nextGuide === activeFatGuide) return;
    activeFatGuide = nextGuide;
    fatGuide.open = false;
    fatGuide.hidden = !nextGuide;
    fatGuideContent.replaceChildren();
    if (nextGuide) {
      fatGuideContent.append(bulletSections([
        ["Common FAT question patterns", nextGuide.patterns],
        ["What to learn", nextGuide.learn],
        ["What to write", nextGuide.write],
      ], "h2"));
    }
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
    const showAnswer = item.subject !== "os" || !item.solutions.length;
    const answer = showAnswer ? answersBySubject[item.subject]?.[item.id] : undefined;
    if (answer) {
      article.querySelector(".solution").before(modelAnswer(answer));
    }
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
