/* eslint-disable no-unused-vars */
// services
import axios from '../../../../services/instance';

// Get comments on a certain Post
// Calling Endpoint /comments/more_children
export const getComments = (props, setComments) => {
  // props
  const {
    postID, depth, limit, commentId,
  } = props;

  console.log('Post ID sent to DB ', postID);
  console.log('Depth sent to DB ', depth);
  console.log('Root Comment ID sent to DB ', commentId);

  axios.get(
    `/comments/comment_tree/${postID}`,
    {
      params: {
        limit, // The maximum number of comments to return
        depth, // the maximum depth of the comment subtrees
        // sort: // string Enum: "top" "new" "best" "old"
        commentId, // string If supplied, this comment will be the (highlighted) focal point of the returned view
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
};

export const getMoreChildren = (children, comments, setComments) => {
  axios.get(
    '/comments/more_children',
    {
      params: {
        children, // An array of comment IDs that need to be fetched
        // depth, // The maximum depth of the comment subtrees
        // limit: // The maximum number of replies in each level
        // sort: // Available values : top, new, best, old
      },
    },
  ).then((response) => {
    // remove last elememt of the array
    // console.log('Old Comments Array:');
    // console.log(comments);

    comments.pop();

    // console.log('After  Comments Array Pop:');
    // console.log(comments);
    // console.log(response.data.comments);

    const newComments = comments.concat(response.data.comments);

    // console.log('Comments Array:');
    // console.log(newComments);

    setComments(newComments);
  }).catch((error) => {
    // 404 Post Not found
    // 400 Error
    // Error message:error.response.data.message
    console.log(error);
  });
};
