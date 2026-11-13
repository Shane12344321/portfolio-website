"use strict";

const $ = selector => document.querySelector(selector);
const data = window.ATLAS_DATA;
const cloudAnswers = window.ATLAS_CLOUD_ANSWERS;
const osAnswers = window.ATLAS_OS_ANSWERS;
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
  let moduleSubject = null;
  let activeFatGuide;

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
    filters = model.selection(data, location.search);
    render();
  });
  render();

  function changeSubject(id) {
    if (id === filters.subject) return;
    const subject = data.subjects.find(item => item.id === id);
    setFilters({ ...filters, subject: id, module: subject.modules[0].id });
    if (window.scrollY > $("#study").offsetTop) window.scrollTo(0, 0);
  }

  function setFilters(next) {
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
    const allDifficulties = courseQuestions.filter(item => filters.module === "all" || item.modules.includes(filters.module)).length;

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
        const control = button(isModule ? "M" + option.id : option.name, "module-button");
        control.dataset.value = option.id;
        if (isModule) {
          const fullName = "Module " + option.id + " · " + option.name;
          control.setAttribute("aria-label", fullName);
          control.title = fullName;
        }
        control.addEventListener("click", () => setFilters({ ...filters, module: option.id }));
        return control;
      }));
      moduleSubject = subject.id;
    }
    updatePressed(modules, String(filters.module));

    $("#course-label").textContent = [subject.code, subject.name, module && "Module " + module.id].filter(Boolean).join(" / ");
    $("#module-title").textContent = module?.name ?? (filters.module === 0 ? "Unmatched questions" : "All modules");
    $("#module-meta").textContent = filters.module === 0
      ? questionCount(allDifficulties) + " without a clear match in the current syllabus"
      : questionCount(allDifficulties) + " in the local paper collection";
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
    const paper = [examLabel, item.slot === "Unknown" ? "Slot unknown" : item.slot, item.year === "Unknown" ? "Year unknown" : item.year];
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
    const answer = item.subject === "cloud" ? cloudAnswers?.[item.id]
      : item.subject === "os" && !item.solutions.length ? osAnswers?.[item.id] : undefined;
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
  body.append(bulletSections([
    ["Direct answer", answer.answer],
    ["Key points", answer.points],
    ["Diagram or example", answer.example],
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
      if (bullet.includes("\n")) item.append(el("pre", "model-answer-code", bullet));
      else item.textContent = bullet;
      list.append(item);
    }
    content.append(el(headingTag, "", label), list);
  }
  return content;
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
