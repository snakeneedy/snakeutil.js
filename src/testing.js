import CustomError from './CustomError.js';

export class AssertionError extends CustomError {};

export const assert = (condition, message = '') => {
  if (!condition) throw new AssertionError(message);
};

export const test = async (title, callback = () => {}) => {
  try {
    const beginTime = performance.now();
    const result = callback();
    if (result instanceof Promise) await result;
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