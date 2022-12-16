import { useState, useEffect } from 'react';

// MUI Components
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

// Components
import CommentActions from './CommentActions/CommentActions';

// Utlis
import calculateTime from '../../../../../utils/calculateTime';

// Styling
import {
  AuthorLink,
  CommentAlign,
  CommentBody,
  CommentContainer, CommentHeader, CommentLeftSideBar, Duration, ImgAvatar,
  CommentText,
} from './styles';
import { MoreCommentsLink } from '../styles';

// Server
import { getMoreChildren } from '../commentsListServer';

function Comment(props) {
  const {
    comment, isLastChild, remainingSiblings, loadMoreRepliesParentFun, continueThreadParentFun,
  } = props;

  // Constants
  const authorProfilelink = `/user/${comment?.author?.userName}`;

  // const replies = (comment) ? comment.replies : [];

  // state
  const [collpase, setCollapse] = useState(false);
  const [replies, setReplies] = useState(comment?.replies);

  const moreRepliesFormat = (replies) ? replies[replies.length - 1]?.Type === 'moreReplies' : false;
  const lastChild = (replies) ? (moreRepliesFormat ? replies.length - 2 : replies.length - 1) : -1;
  const remainingSiblingsCountVar = (replies && moreRepliesFormat) ? replies[replies.length - 1]?.count : 0;

  useEffect(() => {
    // setReplies(repliesProp);
    console.log('Comment.jsx comment:', comment);
    console.log('Comment.jsx replies', replies);
    console.log('Comment.jsx replies for', comment?._id, replies?.length > 0);
  }, [comment]);

  // Functions
  const toggleComment = () => {
    setCollapse(!collpase);
  };

  // The parent Comment refreshes his replies
  // new Replies=>Array of strings of new repleis to be added to this replies
  const loadMoreReplies = () => {
    // replies here can't be empty because the butotn called by this fucntion won't appear if it is empty :)
    getMoreChildren(replies[replies.length - 2]?.children, replies, setReplies);
  };

  const moreReplies = isLastChild && remainingSiblings > 0;
  // const continueThread = !moreReplies && isLastChild && (replies is Array of strings));
  const continueThread = !moreReplies && isLastChild && replies?.length > 0 && (typeof replies[0] === 'string');

  return (
    <>
      {/* <p>
        Last child of this array
        {lastChild}
      </p>
      <p>
        continueThread:
        {continueThread ? 'true' : 'false'}
      </p>

      <p>
        !moreReplies:
        {!moreReplies ? 'true' : 'false'}
      </p>

      <p>
        isLastChild:
        {isLastChild ? 'true' : 'false'}
      </p>
      <p>
        More Repleis Format:
        {moreRepliesFormat ? 'true' : 'false'}
      </p>

      <p>
        LengthCon:
        {replies?.length > 0 ? 'true' : 'false'}
      </p>
      <p>
        id:
        {comment?._id}
      </p> */}

      {/* <p>
        typeof replies ==
        {replies ? typeof replies[0] === 'string' ? 'true' : 'false' : null}
      </p> */}
      {/* <p>
        Type of repleis
        {typeof replies[0]}

      </p> */}
      <CommentContainer>
        {!collpase ? null
          : <OpenInFullRoundedIcon color="primary" fontSize="small" onClick={toggleComment} sx={{ marginTop: '5px' }} />}
        <CommentLeftSideBar>
          <ImgAvatar alt={comment?.author?.userName} src={comment?.author?.profilePicture} />
          <CommentAlign orientation="vertical" flexItem onClick={toggleComment} />
        </CommentLeftSideBar>

        <CommentBody>
          <CommentHeader>
            <AuthorLink href={authorProfilelink}>{comment?.author?.userName}</AuthorLink>
            <Duration>{comment ? calculateTime(comment?.createdAt) : null}</Duration>
          </CommentHeader>
          {collpase ? null
            : (
              <>
                <CommentText><div dangerouslySetInnerHTML={{ __html: comment?.text }} /></CommentText>
                <CommentActions comment={comment} />
                {/* Loop Over All array of Replies on This Comment */}
                {continueThread ? null
                  : replies?.map((reply, i) => {
                    if (i === replies.length - 1 && moreRepliesFormat) { return null; }
                    return (<Comment key={reply?._id} comment={reply} isLastChild={i === lastChild} remainingSiblings={remainingSiblingsCountVar} loadMoreRepliesParentFun={loadMoreReplies} continueThreadParentFun={continueThreadParentFun} />);
                  })}
                {continueThread
                  ? (
                    <MoreCommentsLink blueColor onClick={() => continueThreadParentFun(comment?._id)}>
                      Continue Thread ➜
                    </MoreCommentsLink>
                  )
                  : null}
              </>
            )}
        </CommentBody>
      </CommentContainer>

      {moreReplies ? (
        // <MoreCommentsLink onClick={loadMoreComments}>
        <MoreCommentsLink onClick={loadMoreRepliesParentFun}>
          {/* Only the First 10 Comments */}
          {remainingSiblings > 10 ? 10 : remainingSiblings}
          {' '}
          more replies
        </MoreCommentsLink>
      ) : null}
    </>
  );
}

export default Comment;
