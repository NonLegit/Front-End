/* eslint-disable no-unused-vars */
// services
import axios from '../../../../../services/instance';

export const editPost = (postID, bodyText, setPost) => {
  console.log('editPostServer PostID', postID);
  axios.patch(`/posts/${postID}`, { text: bodyText }).then((response) => {
    console.log('patch posts response to edit post ', response);
    // 200
    if (response.status === 200) {
      console.log('Edited Sucessfully :)');
      setPost(response.data.post);
      console.log(response.data.post);
    }
  }).catch((error) => {
    console.log(error);
    // 400
    // 401
    // 404
    // Error message:error.response.data.message
  });
};
