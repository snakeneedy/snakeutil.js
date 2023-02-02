import CustomError from './CustomError.js';

export class AssertionError extends CustomError {};

export const assert = (condition, message = '') => {
  if (!condition) throw new AssertionError(message);
};

export const test = async (title, callback = async () => {}, times = 1000) => {
  try {
    const beginTime = performance.now();
    while (times > 0) {
      const result = callback();
      if (result instanceof Promise) await result;
      times -= 1;
    }
    const endTime = performance.now();
    console.log('-', title, endTime - beginTime, 'ms');
  } catch(err) {
    console.error('X', title, err);
  }
};

export default {
  AssertionError,
  assert,
  test,
};
