export const makeAsync = (syncFunc) => (async (...args) => syncFunc(...args));

export default {
  makeAsync,
};
