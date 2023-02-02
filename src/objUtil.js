export const jsonCopy = (o) => (o === undefined ? undefined : JSON.parse(JSON.stringify(o)));

export default {
  jsonCopy,
};
