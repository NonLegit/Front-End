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
    comment, src, depth, level, lastChild, remainingSiblings, loadMoreRepliesParentFun,
  } = props;

  // Constants
  const authorProfilelink = `./user/${comment?.author}`;
  // const replies = (comment) ? comment.replies : [];

  // state
  const [collpase, setCollapse] = useState(false);
  const [replies, setReplies] = useState(comment.replies);

  useEffect(() => {
    // setReplies(repliesProp);
  }, []);

  // Functions
  const toggleComment = () => {
    setCollapse(!collpase);
  };

  // The parent Comment refreshes his replies
  // new Replies=>Array of strings of new repleis to be added to this replies
  const loadMoreReplies = () => {
    getMoreChildren(replies[replies.length - 2]?.children, replies, setReplies);
  };

  return (
    <>
      <CommentContainer>
        {!collpase ? null
          : <OpenInFullRoundedIcon color="primary" fontSize="small" onClick={toggleComment} sx={{ marginTop: '5px' }} />}
        <CommentLeftSideBar>
          <ImgAvatar alt={comment?.author} src={src} />
          <CommentAlign orientation="vertical" flexItem onClick={toggleComment} />
        </CommentLeftSideBar>

        <CommentBody>
          <CommentHeader>
            <AuthorLink href={authorProfilelink}>{comment?.author}</AuthorLink>
            <Duration>{comment ? calculateTime(comment?.createdAt) : null}</Duration>
            <p>
              d:
              {depth}
              l:
              {level}
            </p>
          </CommentHeader>
          {collpase ? null
            : (
              <>
                <CommentText>{comment?.text}</CommentText>
                <CommentActions />
                {/* Loop Over All array of Replies on This Comment */}
                {replies?.map((reply, i) => {
                  if (i === replies.length - 1) { return null; }
                  return (<Comment key={reply?._id} comment={reply} src="https://styles.redditmedia.com/t5_74w4tr/styles/profileIcon_9or0sb8dtc5a1.jpeg?width=256&height=256&crop=256:256,smart&s=2a8b7dc794b00e51a6b9f423da2204a999136ecb" depth={depth + 1} level={i} lastChild={i === replies.length - 2} remainingSiblings={replies[replies.length - 1]?.count} loadMoreRepliesParentFun={loadMoreReplies} />);
                })}
                {/* {morereplies ? <p>Continue Thread</p> : null} */}
              </>
            )}
        </CommentBody>
      </CommentContainer>

      {lastChild && remainingSiblings > 0 ? (
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
