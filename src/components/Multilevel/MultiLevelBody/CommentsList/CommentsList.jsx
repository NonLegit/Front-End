/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// MUI components
import { Divider } from '@mui/material';

// Components
import SortComments from './SortComments/SortComments';
import Comment from './Comment/Comment';

// Context
import { usePostContext } from '../../../../contexts/PostContext';

// Server
import { getComments, getMoreChildren } from './commentsListServer';

// Styles
import { MultilevelPostCommentsConatiner } from './styles';
import NoComments from './NoComments/NoComments';

function CommentsList() {
  const { postID } = useParams();

  // Context
  const {
    post, comments, setComments, commentID,
  } = usePostContext();

  // State
  // const [comments, setComments] = useState(null);
  const [sortName, setSortName] = useState('new');

  const commentsCount = (post?.commentCount <= 0);

  // True if there is moreReplies object
  const moreRepliesFormat = (comments) ? comments[comments.length - 1]?.Type === 'moreReplies' : false;
  const lastChild = (comments) ? (moreRepliesFormat ? comments.length - 2 : comments.length - 1) : -1;
  const remainingSiblingsCount = (comments && moreRepliesFormat) ? comments[comments.length - 1]?.count : 0;

  // constants of tree Structure
  const limit = 2;
  const depth = 8;

  const threadLimit = 2;
  const threadDepth = 8;

  // const limitForMoreReplies = (moreRepliesFormat === true) ? (comments[comments.length - 1]?.children?.length > 10 ? 10 : comments[comments.length - 1]?.children?.length) : (0);
  const depthforMoreReplies = 8;

  // useEffect
  useEffect(() => {
    // Fetch Initial Comments with depth and limit
    getComments({
      postID, depth, limit, sort: sortName, commentId: commentID,
    }, setComments);
    console.log('CommentsList.jsx', post);
  }, [postID, post, sortName]);

  // Load More Comments on This post Vertical Limit
  const loadMoreComments = () => {
    console.log('More Comemts on the Parent Post');
    console.log('Comments List ::::::)', comments);
    console.log('Comments List ::::::)', comments[2]);

    // Call API of more Children
    getMoreChildren({
      children: comments[comments.length - 1]?.children, // Remaining Children IDs (Level 0 Comments)
      // limit: limitForMoreReplies, // How many more commenets to be loaded Vertically
      depth: depthforMoreReplies, // how deep are more replies
    }, comments, setComments);
  };

  // Continue A thread
  const continueThread = (commentID) => {
    console.log('Thread');

    // Call API of more Children
    // getMoreChildren(comments[comments.length - 2]?.children, comments, setComments);
    getComments({
      postID, depth: threadDepth, limit: threadLimit, sort: sortName, commentId: commentID,
    }, setComments);
    console.log('Continue Thread Starting from child id ', commentID);
  };

  // getMoreChildren(comments[comments.length - 2]?.children, comments, setComments);

  // const setSort = (e) => {

  // };

  return (
    // <p>Comments List</p>
    commentsCount ? <NoComments />
      : (
        <MultilevelPostCommentsConatiner>
          <Divider />
          <SortComments sortName={sortName} setSortName={setSortName} />
          {/* Loop over   All array of comments on the post */}
          {
            comments?.map((comment, i) => {
              if (i === comments.length - 1 && moreRepliesFormat) { return null; }
              // No problem with  i= comments.length - 1
              return (<Comment key={comment?._id} commentprop={comment} isLastChild={i === lastChild} remainingSiblings={remainingSiblingsCount} loadMoreRepliesParentFun={loadMoreComments} continueThreadParentFun={continueThread} moreRepliesFormatPar={moreRepliesFormat} />);
              // loadMoreRepliesParentFun=this fucntion
            })
          }
        </MultilevelPostCommentsConatiner>
      )
  );
}

export default CommentsList;
