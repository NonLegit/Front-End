const formatDateTime = (text, num) => `${num} ${text}${num === 1 ? '' : 's'}`;
function calculateTime(time) {
  const currentTime = new Date();
  const diff = currentTime - new Date(time);
  if (time === '2022-11-12T12:29:28Z'
  ) { console.log(currentTime, diff, new Date(time), new Date(time).toISOString()); }
  const years = Math.round(diff / (1000 * 60 * 60 * 24 * 365));
  if (years !== 0) {
    return formatDateTime('year', years);
  }
  const months = Math.round(diff / (1000 * 60 * 60 * 24 * 30));
  if (months !== 0) {
    return formatDateTime('month', months);
  }
  const weeks = Math.round(diff / (1000 * 60 * 60 * 24 * 7));
  if (weeks !== 0) {
    return formatDateTime('week', weeks);
  }
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  if (days !== 0) {
    return formatDateTime('day', days);
  }
  const hours = Math.round(diff / (1000 * 60 * 60));
  if (hours !== 0) {
    return formatDateTime('hour', hours);
  }
  const minutes = Math.round(diff / (1000 * 60));
  if (minutes !== 0) {
    return formatDateTime('minute', minutes);
  }
  return formatDateTime('second', Math.round(diff / (1000)));
}

export default calculateTime;
