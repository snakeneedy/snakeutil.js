import testCustomError from './test.CustomError.js';
import testAssertion from './test.assertion.js';
import testFuncUtil from './test.funcUtil.js';
import testObjUtil from './test.objUtil.js';

const main = async () => {
  Object.values(testCustomError).forEach((func) => (func()));
  Object.values(testAssertion).forEach((func) => (func()));
  Object.values(testFuncUtil).forEach((func) => (func()));
  Object.values(testObjUtil).forEach((func) => (func()));
};

main();
