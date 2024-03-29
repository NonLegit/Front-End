import { redirectLogin } from '../../../utils/Redirect';
import useFetch from '../../../hooks/useFetch';

/**
 * This function works as a server create post page
 *
 * @function createPostServer
 */

const createPostServer = () => {
  const communitiesUrl = '/subreddits/mine/subscriber';
  const [data, communitiesError, statusCode] = useFetch(communitiesUrl);
  const communities = data?.data.map((community) => ({
    ...community, subredditName: community.fixedName, id: community._id,
  }));
  // console.log('communities', communities);
  // console.log(statusCode);
  if (statusCode === 401) {
    redirectLogin();
  }

  console.log(statusCode);
  return [communities, communitiesError];
};

export default createPostServer;
