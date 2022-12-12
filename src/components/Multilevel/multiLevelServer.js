// services
import axios from '../../services/instance';

export const getPost = (postID, setPost) => {
  axios.get(`/getpost/${postID}`).then((response) => {
    console.log(response);
    // 200
    if (response.status === 200 || response.status === 200) {
      console.log('Post is get :)');
      setPost(response.data.post);
    }
    return {};
  }).catch((error) => {
    console.log(error);
  });
};
