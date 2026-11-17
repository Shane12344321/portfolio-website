(function initProgress(root) {
  "use strict";

  const STORAGE_PREFIX = "past-paper-atlas.done.v1.";

  function createProgress(questions, storage) {
    const knownIds = new Set(questions.map(item => item.id));
    let completed = new Set();
    let persistent = Boolean(storage);

    function reload() {
      if (!persistent) return;
      try {
        const saved = new Set();
        for (const id of knownIds) {
          if (storage.getItem(STORAGE_PREFIX + id) === "1") saved.add(id);
        }
        completed = saved;
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

    reload();
    return {
      has: id => completed.has(id),
      toggle,
      reload,
      summary,
      get persistent() { return persistent; },
    };
  }

  const api = { createProgress, STORAGE_PREFIX };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AtlasProgress = api;
})(globalThis);
