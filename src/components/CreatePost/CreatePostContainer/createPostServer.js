import useFetch from '../../../hooks/useFetch';

const createPostServer = () => {
  const communitiesUrl = '/subreddits/mine/subscriber';
  const [communities, communitiesError, statusCode] = useFetch(communitiesUrl);
  console.log(statusCode);
  return [communities, communitiesError];
};

export default createPostServer;
