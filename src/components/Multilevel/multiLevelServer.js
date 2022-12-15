// services
import axios from '../../services/instance';

export const getPost = (postID, setPost) => {
  axios.get(`/posts/${postID}`).then((response) => {
    console.log('Response of get post', response);
    // 200
    if (response.status === 200 || response.status === 200) {
      console.log('Post is get :)', postID);
      setPost(response.data);
    }
    return {};
  }).catch((error) => {
    console.log(error);
  });
};
