import { assert, test } from '../src/testing.js';
import { jsonCopy } from '../src/objUtil.js';

export const testJsonCopy = () => (test('testJsonCopy', async () => {
  const basicValues = [null, undefined, true, 10, 3.14, 'abc'];
  basicValues.forEach((val) => (assert(val === jsonCopy(val))));
}));

export default {
  testJsonCopy,
};
