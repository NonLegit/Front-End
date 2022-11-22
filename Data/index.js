const Subreddit = require('./Subreddit.json');
const Community = require('./Community.json');
const Flair = require('./Flair.json');
const Hot = require('./Hot.json');
const Join = require('./Join.json');
const best = require('./SubredditBestPosts.json');
const New = require('./SubredditnewPosts.json');
const top = require('./SubredditnewPosts.json');
const CreatSubreddit = require('./CreatSubreddit.json');

// Something more

module.exports = () => ({
  Subreddit, Community, Flair, Hot, Join, best, top, New, CreatSubreddit,
  // Something more
});
