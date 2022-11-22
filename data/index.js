const overview = require('./overview.json');
const subreddits = require('./subreddits.json');
const user = require('./user.json');
const downvoted = require('./downvoted.json');
const upvoted = require('./upvoted.json');
const saved = require('./saved.json');
const hidden = require('./hidden.json');
const postsTap = require('./postsTap.json');
const join = require('./join.json');

module.exports = () => ({
  overview,
  subreddits,
  user,
  downvoted,
  upvoted,
  saved,
  hidden,
  postsTap,
  join,

});