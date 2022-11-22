import moment from 'moment/moment';

/**
 * check Time Now
 * check if time is today or not
 * @returns {Boolean} main body of navbar in signed out mode
 */
const checkTimeNow = (time) => moment(time).isSame(moment(), 'day');
export default checkTimeNow;
