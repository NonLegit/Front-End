const Subreddit = require('./Subreddit.json');
const Flair = require('./Flair.json');
const Hot = require('./Hot.json');
const Join = require('./Join.json');
const best = require('./SubredditBestPosts.json');
const New = require('./SubredditnewPosts.json');
const top = require('./SubredditnewPosts.json');
const CreatSubreddit = require('./CreatSubreddit.json');
const signup = require('./SignUp.json');
const unique = require('./UniqueUserName.json');
const me = require('./me.json');
const google = require('./google.json');
const facebook = require('./facebook.json');
const login = require('./login.json');
const forgetpassword = require('./forgetpassword.json');
const forgetusername = require('./forgetusername.json');
const resetpassword = require('./resetpassword.json');
const notifications = require('./Notifications.json');
const settings = require('./Settings.json');
const overview = require('./overview.json');
const subreddits = require('./subreddits.json');
const user = require('./user.json');
const downvoted = require('./downvoted.json');
const upvoted = require('./upvoted.json');
const saved = require('./saved.json');
const hidden = require('./hidden.json');
const postsTap = require('./postsTap.json');
const join = require('./Join.json');

// Something more

module.exports = () => ({
  Subreddit,
  Flair,
  Hot,
  Join,
  best,
  top,
  New,
  CreatSubreddit,
  signup,
  unique,
  me,
  google,
  facebook,
  login,
  forgetpassword,
  forgetusername,
  resetpassword,
  notifications,
  settings,
  overview,
  subreddits,
  user,
  downvoted,
  upvoted,
  saved,
  hidden,
  postsTap,
  join,

  // Something more
});
