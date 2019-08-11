module.exports = (domain) => {
  const REPLACE_REGEX = / :.t/g;
  return (`${domain}-${(new Date().toISOString()).toString().toLowerCase()}`).replace(REPLACE_REGEX, '-');
}
