import moment from 'moment';

function mergeTwo(arr1, arr2, sort) {
  if (sort === 'hot') {
    return [...arr1, ...arr2].sort((a, b) => a.sortOnHot - b.sortOnHot).reverse();
  } if (sort === 'top') {
    return [...arr1, ...arr2].sort((a, b) => a.votes - b.votes).reverse();
  }
  return [...arr1, ...arr2].sort((a, b) => moment.utc(a.createdAt).diff(moment.utc(b.createdAt))).reverse();
}

export default mergeTwo;
