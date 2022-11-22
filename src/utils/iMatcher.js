/**
 * This function check whether some string matches the other one or not
 *
 * @function iMatcher
 * @param {string} value - text to match with another one
 * @param {string} text - text to be matched by value
 * @returns {boolean} number separated with commas
 */

function iMatcher(text, value) {
  const regex = new RegExp(value, 'i');
  return text.match(regex) !== null;
}

export default iMatcher;
