import useFetch from '../../../hooks/useFetch';

/**
 * This function works as a server create post page
 *
 * @function createPostServer
 */

const createPostServer = () => {
  const communitiesUrl = '/subreddits/mine/subscriber';
  const [communities, communitiesError, statusCode] = useFetch(communitiesUrl);
  if (statusCode === 200) {
    if (statusCode === 201) {
      // redirection code
    } else {
      console.log('errorMessage');
    }
  }

  console.log(statusCode);
  return [communities, communitiesError];
};

export default createPostServer;
