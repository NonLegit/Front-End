import axios from '../../../../services/instance';
import { redirectLogin } from '../../../../utils/Redirect';
/**
 * This function works as a server for submitting post
 *
 * @function submitPostServer
 * @param {Object} post - post to be posted
 */

// eslint-disable-next-line no-unused-vars
const sharePostServer = (post, navigate) => {
  console.log(JSON.stringify(post));
  console.log('kiro', post);
  axios.post('/posts', JSON.stringify(post)).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log('env variable', process.env.REACT_APP_ENV);
    if (response.status !== 201) {
      if (response.status === 401) {
        redirectLogin();
      }
      const { message } = response.data;
      console.log(message);
    } else {
      const post = response?.data?.data;
      console.log('response after create post', post);
      console.log('post from response', post);
      const postId = post?._id;
      console.log('post from response', postId);
      alert('posted successfully');
      navigate('/');
    }
  }).catch((e) => {
    console.log(e.response);
    console.log(e.response.status);
    console.log(e.response.message);
    alert('somethig went wrong');
  });
};

export default sharePostServer;
