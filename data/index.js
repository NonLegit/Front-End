const {
  top, best, hot, newPosts,
} = require('./homePagePosts.json');
const { subredditsHomePage } = require('./createPostSubreddits.json');
const { posts } = require('./submitPost.json');
const { usernameAvailable } = require('./usernameAvailability.json');
const Subreddit = require('./Subreddit.json');
const Flair = require('./Flair.json');
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
const userSubreddits = require('./userSubreddits.json');
const downvoted = require('./downvoted.json');
const upvoted = require('./upvoted.json');
const saved = require('./saved.json');
const hidden = require('./hidden.json');
const postsTap = require('./postsTap.json');
const join = require('./join.json');
const logout = require('./logout.json');
const token = require('./token.json');
const userInfo = require('./userInfo.json');
const socialLinks = require('./socialLinks.json');
const postSocialLinks = require('./postSocialLinks.json');
// Something more

module.exports = () => ({

  userInfo,
  Subreddit,
  Flair,
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
  userSubreddits,
  downvoted,
  upvoted,
  saved,
  hidden,
  postsTap,
  join,
  subredditsHomePage,
  posts,
  usernameAvailable,
  top,
  best,
  hot,
  logout,
  token,
  new: newPosts,
  socialLinks,
  postSocialLinks,
  // Something more
});
