import { useEffect } from 'react';
import useFetchPosts from '../../../../../hooks/useFetchPosts';

const postsFilteredTapServer = (param) => {
  const [data, dataError, statusCode] = useFetchPosts(`users/${param}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export default postsFilteredTapServer;
