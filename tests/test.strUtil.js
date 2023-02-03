import { assert } from '../src/assertion.js';
import { atou, utoa } from '../src/strUtil.js';
import { test, runTest } from '../src/testing.js';

export const testStrUtil = () => {
  const values = [
    '',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz',
    '~!@#$%^&*()_+ `-=[]{};\':",./<>?',
    '你好世界',
    'こんにちは世界',
    '안녕 세상',
  ];
  values.forEach((val) => {
    assert(val === atou(utoa(val)));
  });
};

export default {
  testStrUtil,
};
