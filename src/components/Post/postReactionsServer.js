import axios from '../../services/instance';

const postReactionsServer = (postId, action, dir) => {
  axios.post(`/posts/${postId}/${action}`, { dir }).then((response) => {
    console.log('action response', response);
  }).catch((error) => {
    console.log(error.response.status);
  });
};

export default postReactionsServer;
