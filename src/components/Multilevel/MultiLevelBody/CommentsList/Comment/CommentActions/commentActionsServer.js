// services
import axios from '../../../../../../services/instance';

export const saveCommenttoDB = (commentID, comment, setComment) => {
  console.log('saveCommentServer CommentID', commentID);
  console.log('oldComment', comment);
  axios.post(`/comments/${commentID}/save`).then((response) => {
    console.log('patch posts response to save comment ', response);
    // 200
    if (response.status === 200) {
      console.log('Saved Sucessfully :)');
      const oldComment = comment;
      // Toogle Save
      setComment(oldComment);
      alert('Comment Saved');
      console.log(response.data);
    } else if (response.status === 304) {
      alert('This Comment is already Saved');
    }
  }).catch((error) => {
    console.log(error);
    // 404
    // Error message:error.response.data.message
    alert(error?.response?.data?.errorMessage);
  });
};
