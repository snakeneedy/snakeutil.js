import CustomError from './CustomError.js';

export class AssertionError extends CustomError {};

export const assert = (condition, message = '') => {
  if (!condition) throw new AssertionError(message);
};

export default {
  AssertionError,
  assert,
};
