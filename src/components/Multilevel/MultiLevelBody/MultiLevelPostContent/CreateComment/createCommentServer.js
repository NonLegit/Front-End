// services
import axios from '../../../../../services/instance';

export const saveComment = (parentID, parentType, comment) => {
  axios.post(
    '/comments',
    {
      parent: `${parentID}`,
      parentType,
      text: comment,
    },
  ).then((response) => {
    console.log(response);
    // 201
    if (response.status === 201 || response.status === 200 || response.status === 304) {
      console.log('Comment Saved Sucessfully :)', comment, 'on Post', parentID);
      return true;
    }
    return false;
  }).catch((error) => {
    console.log(error);
    // 400
    // 404
    return false;
  });
};
