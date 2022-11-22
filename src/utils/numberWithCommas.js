/**
 * This function convert number from the normal form to comma separated form
 *
 * @function numberWithCommas
 * @param {number} x - number to convert
 * @returns {string} number separated with commas
 */

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default numberWithCommas;
