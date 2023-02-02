import testCustomError from './test.CustomError.js';
import testAssertion from './test.assertion.js';
import testFuncUtil from './test.funcUtil.js';
import testObjUtil from './test.objUtil.js';
import { runTest, test } from '../src/testing.js';

const main = async () => {
  Object.values(testCustomError).forEach((func) => test(func.name, func));
  Object.values(testAssertion).forEach((func) => test(func.name, func));
  Object.values(testFuncUtil).forEach((func) => test(func.name, func));
  Object.values(testObjUtil).forEach((func) => test(func.name, func));
  await runTest(10000);
};

main();
