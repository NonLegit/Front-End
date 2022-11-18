import useFetch from '../../../hooks/useFetch';

const createPostServer = () => {
  const communitiesUrl = '/subreddits/mine/subscriber';
  const [communities, communitiesError] = useFetch(communitiesUrl);
  return [communities, communitiesError];
};

export default createPostServer;
