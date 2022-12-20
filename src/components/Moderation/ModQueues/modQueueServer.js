import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

export const modQueueServer = (name, location, sortType) => {
  const [data, dataError, statusCode] = useFetch(`/subreddits/${name}/about/posts/${location.toLowerCase()}?sort=${sortType}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.data];
};
