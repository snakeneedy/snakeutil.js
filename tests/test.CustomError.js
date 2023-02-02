import { assert } from '../src/assertion.js';
import CustomError from '../src/CustomError.js';

export const testCustomError = () => {
  const err = new CustomError();
  assert(err.name === 'CustomError');
};

export default {
  testCustomError,
};
