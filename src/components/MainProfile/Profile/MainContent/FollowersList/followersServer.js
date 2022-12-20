import { useEffect } from 'react';
import useFetchFollowers from '../../../../../hooks/useFetchFollowers';
// import useFetch from '../../../../../hooks/useFetch';

export const followersServer = () => {
  const [data, dataError, statusCode] = useFetchFollowers('users/followers');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.followers];
};
