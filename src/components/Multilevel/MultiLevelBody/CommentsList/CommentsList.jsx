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
  const { post } = usePostContext();

  // State
  const [comments, setComments] = useState(null);
  // const [commentFetched] = getComments({ postID, depth: 9, limit: 20 });// 9=depth

  const commentsCount = (post?.commentCount <= 0);
  // useEffect
  useEffect(() => {
    // Fetch Initial Comments with depth and limit
    getComments({ postID, depth: 9, limit: 20 }, setComments);
  }, [postID, post]);

  // Load More Comments on This post
  const loadMoreComments = () => {
    console.log('More Comemts on the Parent Post');

    // Call API of more Children
    getMoreChildren(comments[comments.length - 2]?.children, comments, setComments);
  };

  // Continue A thread
  const continueThread = (commentID) => {
    console.log('Thread');

    // Call API of more Children
    // getMoreChildren(comments[comments.length - 2]?.children, comments, setComments);
    getComments({
      postID, depth: 9, limit: 20, commentId: commentID,
    }, setComments);
    console.log('Continue Thread Starting from child id ', commentID);
  };

  // getMoreChildren(comments[comments.length - 2]?.children, comments, setComments);

  // True if there is moreReplies object
  const moreRepliesFormat = (comments) ? comments[comments.length - 1]?.Type === 'moreReplies' : false;
  const lastChild = (comments) ? (moreRepliesFormat ? comments.length - 2 : comments.length - 1) : -1;
  const remainingSiblingsCount = (comments && moreRepliesFormat) ? comments[comments.length - 1]?.count : 0;

  return (
    commentsCount ? <NoComments />
      : (
        <MultilevelPostCommentsConatiner>
          <Divider />
          <SortComments />
          {/* Loop over   All array of comments on the post */}
          {
          comments?.map((comment, i) => {
            if (i === comments.length - 1 && moreRepliesFormat) { return null; }
            // No problem with  i= comments.length - 1
            return (<Comment key={comment?._id} comment={comment} src="https://styles.redditmedia.com/t5_74w4tr/styles/profileIcon_9or0sb8dtc5a1.jpeg?width=256&height=256&crop=256:256,smart&s=2a8b7dc794b00e51a6b9f423da2204a999136ecb" depth={0} level={i} isLastChild={i === lastChild} remainingSiblings={remainingSiblingsCount} loadMoreRepliesParentFun={loadMoreComments} continueThreadParentFun={continueThread} />);
            // loadMoreRepliesParentFun=this fucntion
          })
}
        </MultilevelPostCommentsConatiner>
      )
  );
}

export default CommentsList;
