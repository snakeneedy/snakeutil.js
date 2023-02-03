export const atou = (encoded) => decodeURIComponent(escape(atob(encoded)));

export const utoa = (content) => btoa(unescape(encodeURIComponent(content)));

export default {
  atou,
  utoa,
};
