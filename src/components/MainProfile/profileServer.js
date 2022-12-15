import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from '../../services/instance';

export const postsCommentsServer = (name, type, sortType) => {
  const [data, dataError, statusCode] = useFetch(`users/${name}/${type}/?sort=${sortType}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export const overviewServer = (name, sortType) => {
  if (name === ' ') { return null; }
  const [data, dataError, statusCode] = useFetch(`users/${name}/overview/?sort=${sortType}`);
  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts, data?.comments];
};

export const postReactionsServer = (postId, action, dir) => {
  axios.post(`/posts/${postId}/${action}`, { dir }).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('action response', response, action, dir);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export const deletePostComment = (type, id) => {
  axios.delete(`/${type}/${id}`).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('delete response', response);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export const actionOnPost = (postId, action) => {
  axios.patch(`/posts/${postId}/actions/${action}`).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('action response', response, action);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export const actionComment = (commentsId, action) => {
  axios.post(`/comments/${commentsId}/${action}`).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('action response', response, action);
  }).catch((error) => {
    console.log(error.response.status);
  });
};
