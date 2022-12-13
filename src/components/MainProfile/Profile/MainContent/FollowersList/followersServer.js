import { useEffect } from 'react';
import useFetch from '../../../../../hooks/useFetch';

export const followersServer = () => {
  const [data, dataError, statusCode] = useFetch('user/followers');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.followers];
};
