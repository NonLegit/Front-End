function iMatcher(text, value) {
  const regex = new RegExp(value, 'i');
  return text.match(regex) !== null;
}

export default iMatcher;
