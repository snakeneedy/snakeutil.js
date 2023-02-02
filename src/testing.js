const testingSequence = [];
const DEFAULT_TIMES = 1000000;

const testJob = (title, callback = async () => {}) => (async (times = DEFAULT_TIMES) => {
  try {
    console.time(title);
    for (; times > 0; times -= 1) {
      const result = callback();
      if (result instanceof Promise) await result;
    }
    console.timeEnd(title);
  } catch (err) {
    console.error(title + ':', err);
  }
});

export const test = (title, callback = async () => {}) => {
  testingSequence.push(testJob(title, callback));
};

export const runTest = async (times = DEFAULT_TIMES) => {
  while (testingSequence.length) {
    const callback = testingSequence.shift();
    await callback(times);
  };
};

export default {
  test,
  runTest,
};
