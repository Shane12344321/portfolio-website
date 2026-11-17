(function initializeMarkup() {
  "use strict";

  const colours = [
    ["Red", "#c43232"], ["Blue", "#215fd1"],
    ["Green", "#237344"], ["Graphite", "#343434"],
  ];
  const strokes = new Map();
  const history = [];
  let database;
  let persistent = true;
  let saveQueue = Promise.resolve();
  let drawing = false;
  let tool = "pen";
  let colour = colours[0][1];
  let width = 3;
  let gesture;
  let frame;

  const layer = document.createElement("div");
  layer.className = "markup-layer";
  layer.setAttribute("popover", "manual");
  const canvas = document.createElement("canvas");
  canvas.className = "markup-canvas";
  canvas.setAttribute("aria-hidden", "true");
  const context = canvas.getContext("2d");
  if (!context) return;
  const toolbar = document.createElement("div");
  toolbar.className = "markup-toolbar";
  toolbar.setAttribute("role", "toolbar");
  toolbar.setAttribute("aria-label", "Freehand markup");
  const toggle = makeButton("Draw", () => setDrawing(!drawing));
  toggle.className = "markup-toggle";
  toggle.disabled = true;
  toggle.setAttribute("aria-expanded", "false");
  const controls = document.createElement("div");
  controls.className = "markup-controls";
  controls.hidden = true;
  const pen = makeButton("Pen", () => setTool("pen"));
  const eraser = makeButton("Eraser", () => setTool("eraser"));
  const undo = makeButton("Undo", undoAction);
  const clear = makeButton("Clear page", clearPage);
  const palette = document.createElement("div");
  palette.className = "markup-palette";
  palette.setAttribute("role", "group");
  palette.setAttribute("aria-label", "Pen colour");
  for (const [name, value] of colours) {
    const swatch = makeButton("", () => {
      colour = value;
      setTool("pen");
    });
    swatch.className = "markup-swatch";
    swatch.style.setProperty("--swatch", value);
    swatch.dataset.colour = value;
    swatch.setAttribute("aria-label", name + " pen");
    palette.append(swatch);
  }
  const size = document.createElement("select");
  size.setAttribute("aria-label", "Pen width");
  for (const [label, value] of [["Fine", 2], ["Medium", 3], ["Thick", 6]]) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    option.selected = value === width;
    size.append(option);
  }
  size.addEventListener("change", () => { width = Number(size.value); });
  const status = document.createElement("span");
  status.className = "markup-status";
  status.setAttribute("role", "status");
  status.textContent = "Loading saved markup…";
  controls.append(pen, eraser, palette, size, undo, clear, status);
  toolbar.append(toggle, controls);
  layer.append(canvas, toolbar);
  document.body.append(layer);

  function makeButton(label, action) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", action);
    return button;
  }

  function pageScope() {
    const path = location.pathname.replace(/index\.html$/, "");
    const params = new URLSearchParams(location.search);
    return path + "|" + (params.get("subject") || "ai") + "|" + (params.get("module") || "1");
  }

  function activeDialog() {
    return [...document.querySelectorAll("dialog[open]")].at(-1);
  }

  function placeLayer() {
    const parent = activeDialog() || document.body;
    if (layer.parentElement !== parent) {
      if (layer.matches(":popover-open")) layer.hidePopover();
      parent.append(layer);
    }
    if (layer.showPopover && !layer.matches(":popover-open")) layer.showPopover();
  }

  function selectorFor(element) {
    const parts = [];
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      if (node.id) {
        parts.unshift("#" + CSS.escape(node.id));
        return parts.join(" > ");
      }
      const siblings = [...node.parentElement.children].filter(child => child.tagName === node.tagName);
      parts.unshift(node.localName + ":nth-of-type(" + (siblings.indexOf(node) + 1) + ")");
    }
    return ["body", ...parts].join(" > ");
  }

  function anchorAt(x, y) {
    const dialog = activeDialog();
    const hit = document.elementsFromPoint(x, y).find(element => !layer.contains(element) &&
      (!dialog || dialog.contains(element)));
    if (!hit) return null;
    const surface = hit.closest("img, summary, p, h1, h2, h3, h4, h5, h6, li, pre, table, details, .question, .study-section, #module-content, .module-header, .syllabus, .subject-rail, .site-header, .topbar, footer, main") || document.body;
    if (surface instanceof HTMLImageElement) {
      const source = new URL(surface.currentSrc || surface.src, location.href).pathname;
      return { element: surface, anchor: { key: "image:" + source, image: source } };
    }
    const selector = selectorFor(surface);
    const scope = surface.closest(".question") ? null : pageScope();
    const anchor = {
      key: (scope || "questions") + "|" + selector,
      selector,
      scope,
    };
    return { element: surface, anchor };
  }

  function elementsFor(anchor, includeHidden = false) {
    if (anchor.scope && anchor.scope !== pageScope()) return [];
    const elements = anchor.image
      ? [...document.images].filter(image => new URL(image.currentSrc || image.src, location.href).pathname === anchor.image)
      : [...document.querySelectorAll(anchor.selector)];
    const dialog = activeDialog();
    return elements.filter(element => {
      if (layer.contains(element) || (dialog && !dialog.contains(element))) return false;
      if (element.closest("dialog:not([open])")) return false;
      if (includeHidden) return true;
      const closed = element.closest("details:not([open])");
      if (closed && !closed.querySelector(":scope > summary")?.contains(element)) return false;
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
  }

  function renderedStrokes() {
    const rendered = [];
    const anchors = new Map();
    for (const stroke of strokes.values()) {
      if (!anchors.has(stroke.anchor.key)) anchors.set(stroke.anchor.key, elementsFor(stroke.anchor));
      for (const element of anchors.get(stroke.anchor.key)) {
        rendered.push({ stroke, rect: element.getBoundingClientRect() });
      }
    }
    return rendered;
  }

  function schedulePaint() {
    if (!frame) frame = requestAnimationFrame(paint);
  }

  function paint() {
    frame = null;
    placeLayer();
    const ratio = window.devicePixelRatio || 1;
    const pixelWidth = Math.round(innerWidth * ratio);
    const pixelHeight = Math.round(innerHeight * ratio);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (const { stroke, rect } of renderedStrokes()) drawStroke(stroke, rect);
    if (gesture?.stroke) drawStroke(gesture.stroke, gesture.element.getBoundingClientRect());
    const current = currentIds();
    clear.disabled = current.size === 0;
    undo.disabled = !history.some(action => [...action.added, ...action.removed].some(stroke => elementsFor(stroke.anchor, true).length));
  }

  function drawStroke(stroke, rect) {
    context.strokeStyle = stroke.colour;
    context.fillStyle = stroke.colour;
    context.lineWidth = stroke.width * rect.width;
    context.lineCap = "round";
    context.lineJoin = "round";
    const [firstX, firstY] = stroke.points[0];
    if (stroke.points.length === 1) {
      context.beginPath();
      context.arc(rect.left + firstX * rect.width, rect.top + firstY * rect.width, context.lineWidth / 2, 0, Math.PI * 2);
      context.fill();
      return;
    }
    context.beginPath();
    context.moveTo(rect.left + firstX * rect.width, rect.top + firstY * rect.width);
    for (const [x, y] of stroke.points.slice(1)) context.lineTo(rect.left + x * rect.width, rect.top + y * rect.width);
    context.stroke();
  }

  function setDrawing(value) {
    finishGesture();
    drawing = value;
    layer.classList.toggle("is-drawing", drawing);
    toggle.textContent = drawing ? "Finish drawing" : "Draw";
    toggle.setAttribute("aria-expanded", String(drawing));
    toggle.setAttribute("aria-pressed", String(drawing));
    controls.hidden = !drawing;
    setTool(tool);
    schedulePaint();
  }

  function setTool(value) {
    tool = value;
    pen.setAttribute("aria-pressed", String(tool === "pen"));
    eraser.setAttribute("aria-pressed", String(tool === "eraser"));
    canvas.style.cursor = tool === "eraser" ? "cell" : "crosshair";
    for (const swatch of palette.children) swatch.setAttribute("aria-pressed", String(swatch.dataset.colour === colour));
  }

  function localPoint(event, element) {
    const rect = element.getBoundingClientRect();
    return [(event.clientX - rect.left) / rect.width, (event.clientY - rect.top) / rect.width];
  }

  canvas.addEventListener("pointerdown", event => {
    if (!drawing || event.button !== 0 || gesture) return;
    const target = anchorAt(event.clientX, event.clientY);
    if (!target) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    gesture = { pointerId: event.pointerId, element: target.element, removed: new Map() };
    if (tool === "pen") {
      gesture.stroke = {
        id: crypto.randomUUID(),
        anchor: target.anchor,
        colour,
        width: width / target.element.getBoundingClientRect().width,
        points: [localPoint(event, target.element)],
        created: Date.now(),
      };
    } else eraseAt(event.clientX, event.clientY);
    schedulePaint();
  });

  canvas.addEventListener("pointermove", event => {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    if (gesture.stroke) {
      const samples = event.getCoalescedEvents?.();
      for (const sample of samples?.length ? samples : [event]) {
        const point = localPoint(sample, gesture.element);
        const previous = gesture.stroke.points.at(-1);
        const distance = Math.hypot(point[0] - previous[0], point[1] - previous[1]) * gesture.element.getBoundingClientRect().width;
        if (distance >= 1) gesture.stroke.points.push(point);
      }
    } else eraseAt(event.clientX, event.clientY);
    schedulePaint();
  });
  canvas.addEventListener("pointerup", finishGesture);
  canvas.addEventListener("pointercancel", finishGesture);
  canvas.addEventListener("lostpointercapture", finishGesture);

  function finishGesture() {
    if (!gesture) return;
    const added = gesture.stroke ? [gesture.stroke] : [];
    const removed = [...gesture.removed.values()];
    gesture = null;
    if (added.length || removed.length) applyAction({ added, removed });
  }

  function eraseAt(x, y) {
    for (const { stroke, rect } of renderedStrokes()) {
      const points = stroke.points.map(([px, py]) => [rect.left + px * rect.width, rect.top + py * rect.width]);
      const radius = 10 + stroke.width * rect.width / 2;
      const hits = points.some((point, index) => segmentDistance(x, y, points[Math.max(0, index - 1)], point) <= radius);
      if (hits) {
        gesture.removed.set(stroke.id, stroke);
        strokes.delete(stroke.id);
      }
    }
  }

  function segmentDistance(x, y, start, end) {
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    const length = dx * dx + dy * dy;
    const fraction = length ? Math.max(0, Math.min(1, ((x - start[0]) * dx + (y - start[1]) * dy) / length)) : 0;
    return Math.hypot(x - start[0] - fraction * dx, y - start[1] - fraction * dy);
  }

  function currentIds() {
    return new Set([...strokes.values()].filter(stroke => elementsFor(stroke.anchor, true).length).map(stroke => stroke.id));
  }

  function applyAction(action, remember = true) {
    for (const stroke of action.removed) strokes.delete(stroke.id);
    for (const stroke of action.added) strokes.set(stroke.id, stroke);
    if (remember) history.push(action);
    save(action);
    schedulePaint();
  }

  function undoAction() {
    finishGesture();
    const index = history.findLastIndex(action => [...action.added, ...action.removed].some(stroke => elementsFor(stroke.anchor, true).length));
    if (index < 0) return;
    const [action] = history.splice(index, 1);
    applyAction({ added: action.removed, removed: action.added }, false);
  }

  function clearPage() {
    finishGesture();
    const ids = currentIds();
    const removed = [...strokes.values()].filter(stroke => ids.has(stroke.id));
    if (removed.length) applyAction({ added: [], removed });
  }

  function save(action) {
    if (!persistent) return;
    status.textContent = "Saving…";
    saveQueue = saveQueue.then(() => new Promise((resolve, reject) => {
      const transaction = database.transaction("strokes", "readwrite");
      const store = transaction.objectStore("strokes");
      for (const stroke of action.removed) store.delete(stroke.id);
      for (const stroke of action.added) store.put(stroke);
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    })).then(() => {
      status.textContent = "Saved in this browser";
    }).catch(() => {
      persistent = false;
      status.textContent = "Storage unavailable · kept for this visit";
    });
  }

  async function load() {
    try {
      database = await new Promise((resolve, reject) => {
        const request = indexedDB.open("past-paper-atlas-markup", 1);
        request.onupgradeneeded = () => request.result.createObjectStore("strokes", { keyPath: "id" });
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error("Markup storage is blocked"));
      });
      const saved = await new Promise((resolve, reject) => {
        const transaction = database.transaction("strokes", "readonly");
        const request = transaction.objectStore("strokes").getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      for (const stroke of saved.sort((a, b) => a.created - b.created)) {
        if (!stroke.anchor?.key || !stroke.points?.length) continue;
        strokes.set(stroke.id, stroke);
        history.push({ added: [stroke], removed: [] });
      }
      status.textContent = "Saved in this browser";
    } catch {
      persistent = false;
      status.textContent = "Storage unavailable · kept for this visit";
    }
    toggle.disabled = false;
    schedulePaint();
  }

  window.addEventListener("scroll", schedulePaint, true);
  window.addEventListener("resize", schedulePaint);
  document.addEventListener("load", schedulePaint, true);
  document.addEventListener("keydown", event => {
    if (!drawing) return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopImmediatePropagation();
      setDrawing(false);
      toggle.focus();
    } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      undoAction();
    }
  }, true);
  const observer = new MutationObserver(records => {
    if (records.some(record => !layer.contains(record.target))) schedulePaint();
  });
  observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["open", "hidden", "class"] });
  new ResizeObserver(schedulePaint).observe(document.body);
  placeLayer();
  setTool("pen");
  load();
})();
