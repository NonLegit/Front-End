const homePagePosts = require('./homePagePosts.json');
const createPostSubreddits = require('./createPostSubreddits.json');
const submitPost = require('./submitPost.json');
const usernameAvailability = require('./usernameAvailability.json');
// Something more

const {
  top, best, hot, newPosts,
} = homePagePosts;

module.exports = () => ({
  subreddits: createPostSubreddits,
  posts: submitPost,
  usernameAvailable: usernameAvailability,
  top,
  best,
  hot,
  new: newPosts,
  // Something more
});
