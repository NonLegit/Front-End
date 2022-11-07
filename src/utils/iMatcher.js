function iMatcher(text, value) {
  const regex = new RegExp(value, 'i');
  return text.match(regex);
}

export default iMatcher;
