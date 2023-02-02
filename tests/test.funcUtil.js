import { assert } from '../src/assertion.js';
import { makeAsync } from '../src/funcUtil.js';

export const testMakeAsync = () => {
  const syncFunc = () => {};
  const asyncFunc = makeAsync(syncFunc);
  assert(asyncFunc() instanceof Promise);
};

export default {
  testMakeAsync,
};
