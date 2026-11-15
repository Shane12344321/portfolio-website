"use strict";

const $ = selector => document.querySelector(selector);
const guides = window.AI_STUDY_GUIDES;
const questions = window.ATLAS_DATA?.questions.filter(question => question.subject === "ai");
const examNames = { FAT: "FAT", CAT1: "CAT 1", CAT2: "CAT 2" };
const fatPapers = [
  ["2023–24", "B1"], ["2024–25", "E1"], ["2024–25", "E2"], ["2025–26", "D1"], ["2025–26", "D2"],
];

if (guides && questions?.length) {
  initialize();
} else {
  $("#load-error").hidden = false;
  $("#module-content").hidden = true;
}

function initialize() {
  const questionByRef = new Map(questions.map(question => [
    [question.exam, question.year, question.slot, question.label].join("|"), question,
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

  window.addEventListener("popstate", () => render(getModule()));
  render(getModule());

  function render(number) {
    activeModule = number;
    const guide = guides[number];
    for (const link of nav.children) {
      if (link.dataset.module === number) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }

    $("#module-kicker").textContent = "Module " + number;
    $("#module-title").textContent = guide.name;
    $("#module-lead").textContent = guide.lead;
    $("#module-in-atlas").href = atlasUrl(number);
    $("#module-in-atlas").hidden = !guide.papers.length;
    $("#topic-chart").replaceChildren(frequencyTable(guide.topics));
    $("#focus-list").replaceChildren(...guide.focus.map(([title, explanation]) => {
      const item = node("li");
      const body = node("div");
      body.append(node("strong", "", title), node("p", "", explanation));
      item.append(body);
      return item;
    }));
    $("#variation").textContent = guide.variation;
    $("#variation").hidden = !guide.variation;
    $("#evidence-count").textContent = guide.papers.length + " of 5 papers";
    const evidence = guide.papers.map((summary, index) => {
      const [year, slot] = fatPapers[index];
      const paperQuestions = questions.filter(question => question.exam === "FAT" &&
        question.year === year && question.slot === slot && question.modules.includes(Number(number)));
      return paperRow(year, slot, summary, paperQuestions);
    });
    if (!evidence.length) {
      evidence.push(node("p", "empty", "No indexed Module 8 questions across FAT, CAT 1 or CAT 2."));
    }
    $("#fat-evidence").replaceChildren(...evidence);
    $("#practice-source").textContent = guide.practiceSource;
    $("#practice").replaceChildren(...guide.practice.map(practiceCard));
  }

  function paperRow(year, slot, summary, paperQuestions) {
    const row = node("details", "paper-row");
    const label = node("summary");
    label.append(node("span", "paper-label", year + " · " + slot), node("span", "paper-summary", summary));
    const sources = node("div", "paper-sources");
    sources.append(...paperQuestions.map(question => scanButton(question, "View " + question.label + " scan")));
    row.append(label, sources);
    return row;
  }

  function practiceCard(practice) {
    const card = node("div", "drill");
    const question = practice.ref && questionByRef.get(practice.ref.join("|"));
    if (question) card.append(node("p", "eyebrow", questionLabel(question)));
    card.append(node("h4", "", practice.title), node("p", "", practice.why));
    if (question) {
      const controls = node("div", "drill-controls");
      controls.append(scanButton(question, "View question"));
      const followup = practice.followup && questionByRef.get(practice.followup.join("|"));
      if (followup) controls.append(scanButton(followup, "Try the FAT question"));
      card.append(controls);
    }
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
      sourceLink.href = atlasUrl(activeModule, question);
      dialog.showModal();
      dialog.querySelector(".dialog-body").scrollTop = 0;
    });
    return button;
  }
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

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
