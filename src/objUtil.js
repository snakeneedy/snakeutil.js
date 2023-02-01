export const jsonCopy = (o) => (o === undefined ? o : JSON.parse(JSON.stringify(o)));

export default {
  jsonCopy,
};
