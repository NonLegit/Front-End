/**
 * This function works as a server create post page
 *
 * @function createPostServerforSubreddit
 */

import getSubredditAllData from '../../../SubReddit/SubrridetDataServer';

const currentSubredditServer = (subredditName) => {
  if (!subredditName) {
    return [null, null, ''];
  }
  const [data] = getSubredditAllData(subredditName);
  console.log(data);
  const subredditId = data?.id;
  const subredditIcon = data?.icon;
  console.log('server', subredditId, subredditIcon, subredditName);
  return [subredditId, subredditIcon];
};

export default currentSubredditServer;
