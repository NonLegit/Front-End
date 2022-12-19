import axios from '../../services/instance';

const postReactionsServer = (postId, action, dir, setHiddenPosts) => {
  axios.post(`/posts/${postId}/${action}`, { dir }).then((response) => {
    if (action === 'hide' || action === 'delete') { setHiddenPosts((hiddenPosts) => [...hiddenPosts, postId]); }
    console.log('action response', response);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export default postReactionsServer;
