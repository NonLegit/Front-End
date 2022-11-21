import moment from 'moment';

function calculateTime(time) {
  return moment(time).fromNow();
}

export default calculateTime;
