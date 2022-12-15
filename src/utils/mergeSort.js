import moment from 'moment';

function mergeTwo(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => moment.utc(a.createdAt).diff(moment.utc(b.createdAt))).reverse();
}

export default mergeTwo;
