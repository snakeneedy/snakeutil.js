import testCustomError from './test.CustomError.js';
import testTesting from './test.testing.js';
import testFuncUtil from './test.funcUtil.js';

const main = async () => {
  Object.values(testCustomError).forEach((func) => (func()));
  Object.values(testTesting).forEach((func) => (func()));
  Object.values(testFuncUtil).forEach((func) => (func()));
};

main();
