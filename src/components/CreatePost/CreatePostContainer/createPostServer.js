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
    ...community, subredditName: community.fixedName,
  }));
  console.log('communities', communities);
  console.log(statusCode);
  if (statusCode === 200) {
    if (statusCode === 401) {
      // redirection code
    } else {
      console.log('errorMessage');
    }
  }

  console.log(statusCode);
  return [communities, communitiesError];
};

export default createPostServer;
