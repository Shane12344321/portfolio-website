(function initAtlas(root) {
  "use strict";

  const EXAMS = [
    { id: "FAT", label: "FAT", name: "Final Assessment Test" },
    { id: "CAT1", label: "CAT 1", name: "Continuous Assessment Test 1" },
    { id: "CAT2", label: "CAT 2", name: "Continuous Assessment Test 2" },
  ];
  const DIFFICULTIES = [
    { id: "all", label: "All levels" },
    { id: "easy", label: "Easy" },
    { id: "medium", label: "Medium" },
    { id: "hard", label: "Hard" },
  ];
  const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

  function selection(data, query) {
    const params = new URLSearchParams(query);
    const subject = data.subjects.find(item => item.id === params.get("subject")) ?? data.subjects[0];
    const moduleParam = params.get("module");
    const difficultyParam = params.get("difficulty");
    const allowsUnmatched = data.questions.some(item => item.subject === subject.id && item.modules.includes(0));
    let module = subject.modules[0].id;
    if (moduleParam === "all") module = "all";
    else if (moduleParam === "0" && allowsUnmatched) module = 0;
    else if (subject.modules.some(item => String(item.id) === moduleParam)) module = Number(moduleParam);
    const difficulty = DIFFICULTIES.some(item => item.id === difficultyParam) ? difficultyParam : "all";
    return { subject: subject.id, module, difficulty };
  }

  function groupQuestions(data, filters) {
    const matching = data.questions.filter(item =>
      item.subject === filters.subject &&
      (filters.module === "all" || item.modules.includes(filters.module)) &&
      (filters.difficulty === "all" || item.difficulty === filters.difficulty),
    );
    matching.sort((a, b) =>
      (Number(b.year.slice(0, 4)) || 0) - (Number(a.year.slice(0, 4)) || 0) ||
      collator.compare(a.slot, b.slot) || collator.compare(a.label, b.label),
    );
    return EXAMS.map(exam => ({ exam: exam.id, items: matching.filter(item => item.exam === exam.id) }));
  }

  const model = { EXAMS, DIFFICULTIES, selection, groupQuestions };
  if (typeof module !== "undefined" && module.exports) module.exports = model;
  else root.AtlasModel = model;
})(globalThis);
