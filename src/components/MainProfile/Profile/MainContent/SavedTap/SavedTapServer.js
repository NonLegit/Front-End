import { useEffect } from 'react';
import useFetch from '../../../../../hooks/useFetch';

const SavedTapServer = () => {
  const [data, dataError, statusCode] = useFetch('users/saved');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.savedPosts, data?.savedComments];
};

export default SavedTapServer;
