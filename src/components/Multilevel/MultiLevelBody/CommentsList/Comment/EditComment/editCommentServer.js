// services
import axios from '../../../../../../services/instance';

export const editComment = (commentID, bodyText, setComment) => {
  console.log('editPostServer PostID', commentID);
  axios.patch(`/comments/${commentID}`, { text: bodyText }).then((response) => {
    console.log('patch posts response to edit comment ', response);
    // 200
    if (response.status === 200) {
      console.log('Edited Sucessfully :)');
      setComment(response.data.data);
      console.log(response.data.data);
    }
  }).catch((error) => {
    console.log(error);
    // 404
    // Error message:error.response.data.message
  });
};
