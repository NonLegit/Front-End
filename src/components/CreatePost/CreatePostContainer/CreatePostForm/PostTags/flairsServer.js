import useFetch from '../../../../../hooks/useFetch';

const flairsServer = (subreddit) => {
  const [data, error, statusCode] = useFetch(`/subreddits/${subreddit}/flairs`);
  const flairs = data?.data;
  // console.log(data);
  // console.log('el gommaaaaa', flairs, statusCode, error);
  console.log(statusCode);
  return [flairs, error];
};

export default flairsServer;
