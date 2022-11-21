/**
 *
 * redirect to the home page (./) after time
 * @param {number} time
 * @returns {void}
 */
export const redirectHome = (time) => {
  setTimeout(() => {
    // Redirect to home page
    window.location.href = './';
  }, time);
};
