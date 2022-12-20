import { useEffect } from 'react';
import useFetchSort from '../../../hooks/useFetchSort';

export const modQueueServer = (name, location, sortType) => {
  const [data, dataError, statusCode] = useFetchSort(`/subreddits/${name}/about/posts/${location.toLowerCase()}`, sortType);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.data];
};
