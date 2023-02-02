import { assert } from '../src/assertion.js';
import { jsonCopy } from '../src/objUtil.js';

export const testJsonCopy = () => {
  const basicValues = [null, undefined, true, 10, 3.14, 'abc'];
  basicValues.forEach((val) => (assert(val === jsonCopy(val))));
  const obj = { abc: 3.14 };
  const objCopied = jsonCopy(obj);
  assert(obj.abc === objCopied.abc);
};

export default {
  testJsonCopy,
};
