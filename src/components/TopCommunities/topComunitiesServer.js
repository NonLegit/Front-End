import { useEffect } from 'react';
import useFetchTop from '../../hooks/useFetchTop';

export const CommunitiesGetter = (category) => {
  const [data, dataError, statusCode] = useFetchTop(`/subreddits/leaderboard/${category}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
    console.log(data);
  }, [data, dataError, statusCode]);
  return [data?.data];
};
