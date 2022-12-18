import moment from 'moment';

/**
 * This function calculate the relative time between the time the post created at and current time
 *
 * @function calculateTime
 * @param {string} time - time in ISO format
 * @returns {string} relative time in specific time unit
 */

function calculateTime(time) {
  return moment(time).fromNow();
}

export default calculateTime;
