"use strict";

const $ = selector => document.querySelector(selector);
const guides = window.AI_STUDY_GUIDES;
const analyses = window.AI_STUDY_ANALYSIS;
const questions = window.ATLAS_DATA?.questions.filter(question => question.subject === "ai");
const examNames = { FAT: "FAT", CAT1: "CAT 1", CAT2: "CAT 2" };
const fatPapers = [
  ["2023–24", "B1"], ["2024–25", "E1"], ["2024–25", "E2"], ["2025–26", "D1"], ["2025–26", "D2"],
];

if (guides && analyses && questions?.length) {
  initialize();
} else {
  $("#load-error").hidden = false;
  $("#module-content").hidden = true;
}

function initialize() {
  const questionByRef = new Map(questions.map(question => [
    questionKey(question), question,
  ]));
  const nav = $("#module-nav");
  const dialog = $("#source-dialog");
  const sourceLink = $("#question-in-atlas");
  let activeModule;

  for (const [number, guide] of Object.entries(guides)) {
    const link = node("a");
    link.href = "?module=" + number + "#modules";
    link.dataset.module = number;
    link.setAttribute("aria-label", "Module " + number + ", " + guide.name);
    link.append(node("span", "", "M" + number), node("span", "", guide.short));
    link.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      if (number === activeModule) return;
      history.pushState(null, "", "?module=" + number);
      render(number);
    });
    nav.append(link);
  }

  const getModule = () => {
    const number = new URLSearchParams(location.search).get("module");
    return Object.hasOwn(guides, number) ? number : "1";
  };

  window.addEventListener("popstate", () => {
    const number = getModule();
    if (number !== activeModule) render(number);
  });
  render(getModule());

  function render(number) {
    activeModule = number;
    const guide = guides[number];
    const analysis = analyses[number];
    const hasFatQuestions = guide.papers.length > 0;
    for (const link of nav.children) {
      if (link.dataset.module === number) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }

    $("#module-kicker").textContent = "Module " + number;
    $("#module-title").textContent = guide.name;
    $("#module-lead").textContent = guide.lead;
    $("#module-in-atlas").href = atlasUrl(number);
    $("#module-in-atlas").hidden = !hasFatQuestions;
    $("#pattern-jump-label").textContent = hasFatQuestions ? "FAT breakdown" : "Syllabus breakdown";
    $("#patterns-title").textContent = hasFatQuestions ? "Inside the FAT questions" : "Inside the syllabus";
    $("#recurrence-title").textContent = hasFatQuestions ? "What FAT repeats" : "Past-paper coverage";
    $("#topic-chart").replaceChildren(frequencyTable(guide.topics));
    $("#focus-list").replaceChildren(...guide.focus.map(([title, explanation]) => {
      const item = node("li");
      const body = node("div");
      body.append(node("strong", "", title), node("p", "", explanation));
      item.append(body);
      return item;
    }));
    $("#fat-patterns").replaceChildren(...analysis.patterns.map(patternRow));
    $("#variation").textContent = guide.variation;
    $("#variation").hidden = !guide.variation;
    $("#chronology-text").textContent = analysis.chronology;
    $("#chronology").hidden = !analysis.chronology;
    $("#chronology").open = false;
    $("#evidence-count").textContent = guide.papers.length + " of 5 papers";
    const notesByRef = new Map(analysis.questions.map(note => [note.ref.join("|"), note]));
    const evidence = guide.papers.map((summary, index) => {
      const [year, slot] = fatPapers[index];
      const paperQuestions = questions.filter(question => question.exam === "FAT" &&
        question.year === year && question.slot === slot && question.modules.includes(Number(number)));
      return paperRow(year, slot, summary, paperQuestions, notesByRef);
    });
    if (!evidence.length) {
      evidence.push(node("p", "empty", "No indexed Module 8 questions across FAT, CAT 1 or CAT 2."));
    }
    $("#fat-evidence").replaceChildren(...evidence);
    $("#practice-source").textContent = guide.practiceSource;
    const practice = analysis.exercises ? analysis.exercises.map(exerciseCard) : analysis.transfers.map(transferCard);
    $("#practice").replaceChildren(...practice);
  }

  function patternRow(pattern) {
    const row = node("details", "pattern");
    const summary = node("summary");
    const title = node("span", "pattern-label");
    title.append(node("strong", "", pattern.title), node("span", "pattern-cue", pattern.cue));
    summary.append(title);
    const sources = pattern.evidence.map(ref => questionByRef.get(ref.join("|"))).filter(Boolean);
    if (sources.length) {
      const papers = new Set(sources.map(question => [question.year, question.slot].join("|")));
      summary.append(node("span", "pattern-badge", papers.size + "/" + fatPapers.length + " FAT"));
    }
    const body = node("div", "pattern-body");
    const columns = node("div", "pattern-grid");
    const variations = node("div", "pattern-versions");
    variations.append(node("h4", "", sources.length ? "How the papers vary" : "Example situations"), definitionList(pattern.variations));
    const answer = node("div", "pattern-answer");
    const steps = node("ol", "answer-steps");
    steps.append(...pattern.write.map(({ label, text }) => {
      const step = node("li");
      step.append(node("strong", "", label), node("p", "", text));
      return step;
    }));
    answer.append(node("h4", "", "Build your answer"), steps);
    columns.append(variations, answer);
    body.append(columns, noteLine("Watch for", pattern.pitfall, "pattern-check"));
    if (sources.length) {
      const evidence = node("div", "pattern-evidence");
      evidence.append(node("h4", "", "Original FAT questions"));
      const buttons = node("div", "source-buttons");
      buttons.append(...sources.map(question => scanButton(question, shortQuestionLabel(question))));
      evidence.append(buttons);
      body.append(evidence);
    }
    row.append(summary, body);
    return row;
  }

  function paperRow(year, slot, summary, paperQuestions, notesByRef) {
    const row = node("details", "paper-row");
    const label = node("summary");
    label.append(node("span", "paper-label", year + " · " + slot), node("span", "paper-summary", summary));
    const sources = node("div", "paper-questions");
    sources.append(...paperQuestions.map(question => {
      const item = node("div", "paper-question");
      const heading = node("div", "question-heading");
      heading.append(node("h4", "", question.label), scanButton(question, "Original scan"));
      item.append(heading);
      const annotation = notesByRef.get(questionKey(question));
      if (annotation) {
        item.append(node("p", "question-demand", annotation.asks), noteLine("Watch for", annotation.watch, "question-note"));
      }
      return item;
    }));
    row.append(label, sources);
    return row;
  }

  function transferCard(pair) {
    const source = questionByRef.get(pair.source.join("|"));
    const target = questionByRef.get(pair.target.join("|"));
    const card = node("details", "drill");
    const summary = node("summary");
    summary.append(node("span", "eyebrow", pair.match), node("strong", "", pair.title));
    const body = node("div", "drill-body");
    const controls = node("div", "source-buttons");
    if (source) controls.append(scanButton(source, (source.exam === "FAT" ? "Start with " : examNames[source.exam] + " · ") + shortQuestionLabel(source)));
    if (target) controls.append(scanButton(target, "Then FAT · " + shortQuestionLabel(target)));
    body.append(controls, definitionList([
      { label: "What carries over", text: pair.carry },
      { label: "What changes", text: pair.change },
      { label: "Check yourself", text: pair.test },
    ], "pair-analysis"));
    card.append(summary, body);
    return card;
  }

  function exerciseCard(exercise) {
    const card = node("details", "drill");
    const summary = node("summary");
    summary.append(node("span", "eyebrow", "Hypothetical practice"), node("strong", "", exercise.title));
    const body = node("div", "drill-body");
    body.append(node("p", "exercise-prompt", exercise.prompt), noteLine("Check yourself", exercise.check, "exercise-check"));
    card.append(summary, body);
    return card;
  }

  function scanButton(question, label) {
    const button = node("button", "scan-button", label);
    button.type = "button";
    button.setAttribute("aria-label", label + ", " + questionLabel(question));
    button.addEventListener("click", () => {
      $("#source-title").textContent = questionLabel(question);
      $("#source-note").textContent = question.note;
      $("#source-note").hidden = !question.note;
      $("#source-images").replaceChildren(...question.scans.map(scanFigure));
      const module = question.modules.includes(Number(activeModule)) ? activeModule : question.modules[0];
      sourceLink.href = atlasUrl(module, question);
      dialog.showModal();
      dialog.querySelector(".dialog-body").scrollTop = 0;
    });
    return button;
  }
}

function definitionList(items, className) {
  const list = node("dl", className);
  list.append(...items.map(({ label, text }) => {
    const item = node("div");
    item.append(node("dt", "", label), node("dd", "", text));
    return item;
  }));
  return list;
}

function noteLine(label, text, className) {
  const line = node("p", className);
  line.append(node("strong", "", label), document.createTextNode(" " + text));
  return line;
}

function frequencyTable(topics) {
  const table = node("table", "frequency");
  table.setAttribute("aria-label", "Papers testing each topic");
  const head = table.createTHead().insertRow();
  for (const label of ["Topic", "FAT", "CAT 1", "CAT 2"]) {
    const header = node("th", "", label);
    header.scope = "col";
    head.append(header);
  }
  const body = table.createTBody();
  for (const [label, fat, cat1, cat2] of topics) {
    const row = body.insertRow();
    const topic = node("th", "", label);
    topic.scope = "row";
    row.append(topic);
    const value = node("div", "fat-count");
    const bar = node("span", "bar");
    bar.setAttribute("aria-hidden", "true");
    for (let index = 0; index < 5; index++) {
      bar.append(node("i", index < fat ? "filled" : ""));
    }
    value.append(bar, node("span", "", fat + "/5"));
    const cell = node("td", "fat-cell");
    cell.append(value);
    row.append(cell, node("td", "", cat1 + "/8"), node("td", "", cat2 + "/6"));
  }
  return table;
}

function scanFigure(scan, index) {
  const figure = node("figure");
  const link = node("a");
  link.href = "../" + scan.src;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", "Open original scan " + (index + 1) + " at full size");
  const image = node("img");
  image.src = link.href;
  image.alt = "Original question, source page " + scan.page;
  image.width = scan.width;
  image.height = scan.height;
  link.append(image);
  figure.append(link, node("figcaption", "", "Source page " + scan.page + " · select image for full size"));
  return figure;
}

function atlasUrl(number, question) {
  const destination = location.protocol === "file:" ? "../index.html" : "../";
  const params = new URLSearchParams({ subject: "ai", module: number });
  if (!question) return destination + "?" + params;
  params.set("answer", "1");
  return destination + "?" + params + "#question-" + question.id;
}

function questionLabel(question) {
  return [examNames[question.exam], question.year, question.slot, question.label].join(" · ");
}

function shortQuestionLabel(question) {
  return question.year + " " + question.slot + " " + question.label;
}

function questionKey(question) {
  return [question.exam, question.year, question.slot, question.label].join("|");
}

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
