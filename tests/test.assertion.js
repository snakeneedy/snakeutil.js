import { AssertionError, assert } from '../src/assertion.js';

export const testAssertionError = () => {
  const err = new AssertionError();
  assert(err.name === 'AssertionError');
};

export const testAssert = () => {
  try {
    assert(false, 'intentionally throw AssertionError');
  } catch (err) {
    assert(err.constructor.name === 'AssertionError');
  }
};

export default {
  testAssertionError,
  testAssert,
};
