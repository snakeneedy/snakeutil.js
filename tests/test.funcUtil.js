import { assert, test } from '../src/testing.js';
import { makeAsync } from '../src/funcUtil.js';

export const testMakeAsync = () => (test('testMakeAsync', async () => {
  const syncFunc = () => {};
  const asyncFunc = makeAsync(syncFunc);
  assert(asyncFunc() instanceof Promise);
}));

export default {
  testMakeAsync,
};
