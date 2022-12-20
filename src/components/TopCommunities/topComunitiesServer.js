import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

export const CommunitiesGetter = (category) => {
  const [data, dataError, statusCode] = useFetch(`/subreddits/leaderboard/${category}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
    console.log(data);
  }, [data, dataError, statusCode]);
  return [data?.data];
};
