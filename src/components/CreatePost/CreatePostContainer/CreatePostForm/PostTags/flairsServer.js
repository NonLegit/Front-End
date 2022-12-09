import useFetch from '../../../../../hooks/useFetch';

const flairsServer = async (subreddit) => {
  const [data, error, statusCode] = useFetch(`/subreddits/${subreddit}/flairs`);
  console.log(statusCode);
  return [data, error];
};

export default flairsServer;
