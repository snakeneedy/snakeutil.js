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
    return true;
  } catch (err) {
    console.error(title + ':', err);
    return false;
  }
});

export const test = (title, callback = async () => {}) => {
  testingSequence.push(testJob(title, callback));
};

export const runTest = async (times = DEFAULT_TIMES) => {
  console.log(`=== runTest ${times} times ===`);
  let countOK = 0, countFailed = 0;
  while (testingSequence.length) {
    const toTest = testingSequence.shift();
    const isOK = await toTest(times);
    if (isOK) countOK += 1;
    else countFailed += 1;
  };
  console.log(`... ${countOK} OK / ${countFailed} failed.`);
};

export default {
  test,
  runTest,
};
