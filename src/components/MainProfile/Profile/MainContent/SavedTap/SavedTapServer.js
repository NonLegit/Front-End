import { useEffect } from 'react';
import useFetchSaved from '../../../../../hooks/useFetchSaved';

const SavedTapServer = () => {
  const [data, dataError, statusCode] = useFetchSaved('users/saved');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.savedPosts, data?.savedComments];
};

export default SavedTapServer;
