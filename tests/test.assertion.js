import { AssertionError, assert } from '../src/assertion.js';
import { test } from '../src/testing.js';

export const testAssertionError = () => (test('testAssertionError', async () => {
  const err = new AssertionError();
  assert(err.name === 'AssertionError');
}));

export const testAssert = () => (test('testAssert', async () => {
  try {
    assert(false, 'intentionally throw AssertionError');
  } catch (err) {
    assert(err.constructor.name === 'AssertionError');
  }
}));

export default {
  testAssertionError,
  testAssert,
};
