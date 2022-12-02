/**
 * This function works as a server create post page
 *
 * @function createPostServerforSubreddit
 */

import getSubredditAllData from '../../../SubReddit/SubrridetDataServer';

const currentSubredditServer = (subredditName) => {
  const [data] = getSubredditAllData(subredditName);
  const subredditId = data?.id;
  const subredditIcon = data?.icon;
  return [subredditId, subredditIcon, subredditName];
};

export default currentSubredditServer;
