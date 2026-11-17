const assert = require('node:assert/strict');
const { test } = require('node:test');
const { createProgress, STORAGE_PREFIX } = require('../fat/progress.js');

const questions = [
  { id: 'ai-a', subject: 'ai', modules: [1], difficulty: 'easy' },
  { id: 'ai-b', subject: 'ai', modules: [1, 2], difficulty: 'hard' },
  { id: 'ai-c', subject: 'ai', modules: [2], difficulty: 'medium' },
  { id: 'ai-old', subject: 'ai', modules: [0], difficulty: 'easy' },
  { id: 'os-a', subject: 'os', modules: [1], difficulty: 'easy' },
];

function memoryStorage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
  };
}

test('each module counts all its questions, including shared questions', () => {
  const progress = createProgress(questions, memoryStorage());
  assert.deepEqual(progress.summary('ai', 1), { done: 0, total: 2, complete: false });
  progress.toggle('ai-b');
  assert.deepEqual(progress.summary('ai', 1), { done: 1, total: 2, complete: false });
  assert.deepEqual(progress.summary('ai', 2), { done: 1, total: 2, complete: false });
  assert.deepEqual(progress.summary('os', 1), { done: 0, total: 1, complete: false });
  assert.deepEqual(progress.summary('ai', 'all'), { done: 1, total: 4, complete: false });
});

test('a full module becomes complete and undo reopens it', () => {
  const progress = createProgress(questions, memoryStorage());
  progress.toggle('ai-a');
  progress.toggle('ai-b');
  assert.deepEqual(progress.summary('ai', 1), { done: 2, total: 2, complete: true });
  progress.toggle('ai-a');
  assert.equal(progress.has('ai-a'), false);
  assert.deepEqual(progress.summary('ai', 1), { done: 1, total: 2, complete: false });
});

test('empty modules stay incomplete and unmatched questions have a counter', () => {
  const progress = createProgress(questions, memoryStorage());
  assert.deepEqual(progress.summary('ai', 8), { done: 0, total: 0, complete: false });
  progress.toggle('ai-old');
  assert.deepEqual(progress.summary('ai', 0), { done: 1, total: 1, complete: true });
});

test('completion survives reload and undo persists', () => {
  const storage = memoryStorage();
  const first = createProgress(questions, storage);
  first.toggle('ai-a');
  const second = createProgress(questions, storage);
  assert.equal(second.has('ai-a'), true);
  second.toggle('ai-a');
  assert.equal(createProgress(questions, storage).has('ai-a'), false);
});

test('separate tabs preserve independent question updates', () => {
  const storage = memoryStorage();
  const first = createProgress(questions, storage);
  const second = createProgress(questions, storage);
  first.toggle('ai-a');
  second.toggle('ai-b');
  first.reload();
  assert.deepEqual(first.summary('ai', 1), { done: 2, total: 2, complete: true });
  second.reload();
  second.toggle('ai-a');
  first.reload();
  assert.equal(first.has('ai-a'), false);
  assert.equal(first.has('ai-b'), true);
});

test('invalid saved values and removed questions do not inflate counts', () => {
  const storage = memoryStorage();
  storage.setItem(STORAGE_PREFIX + 'ai-a', '{broken');
  storage.setItem(STORAGE_PREFIX + 'removed', '1');
  const progress = createProgress(questions, storage);
  assert.deepEqual(progress.summary('ai', 'all'), { done: 0, total: 4, complete: false });
  progress.toggle('unknown');
  assert.equal(progress.has('unknown'), false);
});

test('blocked storage keeps the controls usable for this visit', () => {
  const storage = {
    getItem() { throw new Error('Storage is blocked'); },
    setItem() { throw new Error('Storage is blocked'); },
    removeItem() { throw new Error('Storage is blocked'); },
  };
  const progress = createProgress(questions, storage);
  progress.toggle('ai-a');
  progress.reload();
  assert.equal(progress.persistent, false);
  assert.equal(progress.has('ai-a'), true);
  progress.toggle('ai-a');
  assert.equal(progress.has('ai-a'), false);
});

test('a write failure preserves the completion in memory', () => {
  const storage = memoryStorage();
  storage.setItem = () => { throw new Error('Quota exceeded'); };
  const progress = createProgress(questions, storage);
  progress.toggle('ai-a');
  assert.equal(progress.persistent, false);
  assert.equal(progress.has('ai-a'), true);
  assert.deepEqual(progress.summary('ai', 1), { done: 1, total: 2, complete: false });
});
