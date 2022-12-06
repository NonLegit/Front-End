import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

export const postsTapServer = (name) => {
  const [data, dataError, statusCode] = useFetch(`user/${name}/post`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export const overviewServer = (name) => {
  const [data, dataError, statusCode] = useFetch(`users/${name}/overview`);
  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};
