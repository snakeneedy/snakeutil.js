import { assert, test } from '../src/testing.js';
import CustomError from '../src/CustomError.js';

export const testCustomError = () => (test('testCustomError', async () => {
  const err = new CustomError();
  assert(err.name === 'CustomError');
}));

export default {
  testCustomError,
};
