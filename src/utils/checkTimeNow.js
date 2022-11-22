import moment from 'moment/moment';

const checkTimeNow = (time) => moment(time).isSame(moment(), 'day');
export default checkTimeNow;
