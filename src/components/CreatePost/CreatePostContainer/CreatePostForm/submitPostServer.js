import axios from '../../../../services/instance';
/**
 * This function works as a server for submitting post
 *
 * @function submitPostServer
 * @param {Object} post - post to be posted
 */
const submitPostServer = (post) => {
  axios.post('/posts', JSON.stringify(post)).then((response) => {
    console.log(response.data);
    console.log(response.status);
    if (response.status !== 201) {
      const { message } = response.data;
      console.log(message);
    } else {
      // post created successfully
    }
    alert('posted successfully');
  }).catch((e) => {
    console.log(e);
    alert('somethig went wrong');
  });
};

export default submitPostServer;
