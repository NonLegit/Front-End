import { useEffect } from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import axios from '../../services/instance';
import useFetchProfile from '../../hooks/useFetchProfile';

// not working using use fetch posts
export const postsCommentsServer = (name, type, sortType) => {
  const [data, dataError, statusCode] = useFetchPosts(`users/${name}/${type}`, sortType);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.posts];
};

export const overviewServer = (name, sort) => {
  if (name === ' ') { return null; }
  const [data, dataError, statusCode] = useFetchProfile(`users/${name}/overview`, sort);
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

export const actionCommentModerate = (commentsId, action) => {
  axios.post(`/comments/${commentsId}/moderate/${action}`).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('action response', response, action);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export const moderationAction = (postId, action) => {
  axios.patch(`/posts/${postId}/moderate/${action}`).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    console.log('action response', response, action);
  }).catch((error) => {
    console.log(error.response.status);
  });
};
