const {
  top, best, hot, newPosts,
} = require('./homePagePosts.json');
const { subreddits } = require('./createPostSubreddits.json');
const { posts } = require('./submitPost.json');
const { usernameAvailable } = require('./usernameAvailability.json');
// Something more

module.exports = () => ({
  subreddits,
  posts,
  usernameAvailable,
  top,
  best,
  hot,
  new: newPosts,
  // Something more
});
