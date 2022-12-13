import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from '../../services/instance';

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
  if (name === ' ') { return null; }
  const [data, dataError, statusCode] = useFetch(`users/${name}/overview`);
  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export const postReactionsServer = (postId, action, dir) => {
  axios.post(`/posts/${postId}/${action}`, { dir }).then((response) => {
    console.log('action response', response, action);
  }).catch((error) => {
    console.log(error.response.status);
  });
};
