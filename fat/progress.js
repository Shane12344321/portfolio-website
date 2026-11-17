(function initProgress(root) {
  "use strict";

  const STORAGE_PREFIX = "past-paper-atlas.done.v1.";
  const MODULE_MARK_PREFIX = "past-paper-atlas.module-mark.v1.";

  function createProgress(questions, storage) {
    const knownIds = new Set(questions.map(item => item.id));
    let completed = new Set();
    const moduleMarks = new Map();
    let persistent = Boolean(storage);

    function reload() {
      if (!persistent) return;
      try {
        const saved = new Set();
        for (const id of knownIds) {
          if (storage.getItem(STORAGE_PREFIX + id) === "1") saved.add(id);
        }
        completed = saved;
        moduleMarks.clear();
      } catch {
        persistent = false;
      }
    }

    function toggle(id) {
      if (!knownIds.has(id)) return;
      const done = !completed.has(id);
      if (done) completed.add(id);
      else completed.delete(id);
      if (!persistent) return;
      try {
        if (done) storage.setItem(STORAGE_PREFIX + id, "1");
        else storage.removeItem(STORAGE_PREFIX + id);
      } catch {
        persistent = false;
      }
    }

    function summary(subject, module) {
      const items = questions.filter(item => item.subject === subject &&
        (module === "all" || item.modules.includes(module)));
      const done = items.filter(item => completed.has(item.id)).length;
      return { done, total: items.length, complete: items.length > 0 && done === items.length };
    }

    function moduleMark(subject, module) {
      const key = subject + "." + module;
      if (!moduleMarks.has(key)) {
        let mark = "";
        try {
          if (persistent) mark = storage.getItem(MODULE_MARK_PREFIX + key);
        } catch {
          persistent = false;
        }
        moduleMarks.set(key, mark === "orange" || mark === "green" ? mark : "");
      }
      return moduleMarks.get(key);
    }

    function markModule(subject, module, mark) {
      const key = subject + "." + module;
      moduleMarks.set(key, mark);
      if (!persistent) return;
      try {
        storage.setItem(MODULE_MARK_PREFIX + key, mark);
      } catch {
        persistent = false;
      }
    }

    reload();
    return {
      has: id => completed.has(id),
      toggle,
      reload,
      summary,
      moduleMark,
      markModule,
      get persistent() { return persistent; },
    };
  }

  const api = { createProgress, STORAGE_PREFIX, MODULE_MARK_PREFIX };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AtlasProgress = api;
})(globalThis);
