import conditionalUseFetch from '../../../../../hooks/conditionalUseFetch';

const flairsServer = (subreddit) => {
  // console.log('subreddit', subreddit);
  const [data, error, statusCode] = conditionalUseFetch(`/subreddits/${subreddit}/flairs`, subreddit);
  const flairs = data?.data;
  // console.log(data);
  // console.log('el gommaaaaa', flairs, statusCode, error);
  console.log(statusCode);
  return [flairs, error];
};

export default flairsServer;
