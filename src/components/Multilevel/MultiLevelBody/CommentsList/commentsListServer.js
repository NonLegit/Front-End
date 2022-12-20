// services
import axios from '../../../../services/instance';

// Get comments on a certain Post
// Calling Endpoint /comments/more_children
export const getComments = (props, setComments) => {
  // props
  const {
    postID, depth, limit, sort, commentId,
  } = props;

  console.log('Post ID sent to DB ', postID);
  console.log('Depth sent to DB ', depth);
  console.log('Limit sent to DB ', limit);
  console.log('Sort sent to DB ', sort);
  console.log('Root Comment ID sent to DB ', commentId);
  axios.get(
    `/comments/comment_tree/${postID}`,
    {
      params: {
        limit, // The maximum number of comments to return
        depth, // the maximum depth of the comment subtrees
        sort, // string Enum: "top" "new" "best" "old"
        commentId, // string If supplied, this comment will be the (highlighted) focal point of the returned view
        // context: //integer The number of parents shown(an integer between 0 and 8)
      },
    },
  ).then((response) => {
    console.log('/comments/comment_tree', response);
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

export const getMoreChildren = (props, comments, setComments) => {
  const {
    children, depth, limit, sort,
  } = props;
  console.log('children sent to DB ', children);
  console.log('Comments Array to be Refilled ', comments);
  axios.get(
    '/comments/more_children',
    {
      params: {
        children: children?.toString(), // An array of comment IDs that need to be fetched
        depth, // The maximum depth of the comment subtrees
        limit, // The maximum number of replies in each level
        sort, // Available values : top, new, best, old
      },
    },
  ).then((response) => {
    console.log('/comments/more_children', response);
    // remove last elememt of the array
    console.log('Old Comments Array:');
    console.log(comments);

    // Remove More Repleis Object
    comments.pop();

    const newComments = comments.concat(response?.data?.comments);
    console.log('Adding new Comment');
    console.log(response.data.comments);

    // // eslint-disable-next-line no-unsafe-optional-chaining
    // MoreRepliesObject.count -= response?.data?.comments?.length;
    // console.log('Comments Array:');
    // console.log(newComments);
    // if (MoreRepliesObject.count > 0) {
    //   // add back to the end
    //   newComments = newComments.concat(MoreRepliesObject);
    // }

    // Update Array
    console.log('Final Array:');
    console.log(newComments);
    setComments(newComments);
  }).catch((error) => {
    // 404 Post Not found
    // 400 Error
    // Error message:error.response.data.message
    console.log(error);
  });
};

export const saveComment = async (parentID, parentType, comment, post, setPost, comments, setComments) => {
  await axios.post(
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
      console.log('old comments', comments);// New Added Comment

      // concatinate this comment to beginning comment
      let newComment = [response?.data?.data];
      newComment = newComment.concat(comments);
      console.log('new comments', newComment);// New Added Comment

      setComments(newComment);
      if (parentType === 'Post') {
        console.log(post);
        // increase Post Comments
        const newPost = post;
        newPost.commentCount += 1;
        setPost(newPost);
        console.log('Incremeted');
      }
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
