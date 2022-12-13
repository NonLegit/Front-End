import { useState, useEffect } from 'react';

// services
import axios from '../../../../services/instance';

export const getComments = (props) => {
  // props
  const { postID, depth } = props;
  // states
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('Post ID sent to DB ', postID);
    console.log('Depth sent to DB ', depth);
    axios.get(
      `/comments/comment_tree/${postID}`,
      {
        params: {
          limit: 10, // The maximum number of comments to return
          depth, // the maximum depth of the comment subtrees
          // sort: // string Enum: "top" "new" "best" "old"
          // commentId: //string If supplied, this comment will be the (highlighted) focal point of the returned view
          // context: //integer The number of parents shown(an integer between 0 and 8)
        },
      },
    ).then((response) => {
      console.log(response);
      // 200
      if (response.status === 200 || response.status === 304) {
        console.log('Commnets for post ', postID, 'are got :)');
        console.log(postID);

        setComments(response.data.comments);
      }
    }).catch((error) => {
      // 404 Post Not found
      // 400 Error
      // Error message:error.response.data.message
      console.log(error);
    });
  }, []);

  return [comments];
};
