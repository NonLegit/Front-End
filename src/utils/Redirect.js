/**
 *
 * redirect to the home page (./) after time
 * @param {number} time
 * @returns {void}
 */
export const redirectHome = (time) => {
  setTimeout(() => {
    // Redirect to home page
    window.location.pathname = '';
  }, time);
};

/**
 *
 * redirect to the login page (./login) after time
 * @param {number} time
 * @returns {void}
 */
export const redirectLogin = (time) => {
  setTimeout(() => {
    // Redirect to login page
    window.location.pathname = 'login';
  }, time);
};
