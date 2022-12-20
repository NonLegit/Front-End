import axios from '../../services/instance';

const postReactionsServer = (postId, action, dir, setHiddenPosts) => {
  if (action !== 'delete') {
    axios.post(`/posts/${postId}/${action}`, { dir }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        if (action === 'hide') { setHiddenPosts((hiddenPosts) => [...hiddenPosts, postId]); }
      }
      console.log('action response', response);
    }).catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
    });
  } else {
    axios.delete(`/posts/${postId}`).then((response) => {
      if (response.status === 204 || response.status === 201) {
        setHiddenPosts((hiddenPosts) => [...hiddenPosts, postId]);
      }
      console.log('action response', response);
    }).catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
    });
  }
};

export default postReactionsServer;
