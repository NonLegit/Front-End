import { useEffect } from 'react';
import useFetch from '../../../../../hooks/useFetch';

const postsFilteredTapServer = (param) => {
  const [data, dataError, statusCode] = useFetch(`users/${param}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export default postsFilteredTapServer;
