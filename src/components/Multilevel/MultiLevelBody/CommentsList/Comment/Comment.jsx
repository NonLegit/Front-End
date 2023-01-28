import { useEffect, useState } from 'react';

// MUI Components
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

// Components
import CommentActions from './CommentActions/CommentActions';
import EditComment from './EditComment/EditComment';

// Utlis
import calculateTime from '../../../../../utils/calculateTime';

// Styling
import {
  AuthorLink,
  CommentAlign,
  CommentBody,
  CommentContainer, CommentHeader, CommentLeftSideBar, Duration, ImgAvatar,
  CommentText,
  ImgAvatarSmall,
} from './styles';
import { MoreCommentsLink } from '../styles';

// Server
import { getMoreChildren } from '../commentsListServer';

/**
 * Comment (MultiLeveled Replies) Component
 * @property {object}commentprop --Comment Object Data
 * @property {boolean}isLastChild --is this comment last children(reply) of the parent comment
 * @property {integer}remainingSiblings --Count for Remaining Siblings of this comment
 * @property {function}loadMoreRepliesParentFun --Function to load more replies
 * @property {function}continueThreadParentFun --Function to continue thread from this comment
 * @property {boolean}moreRepliesFormatPar --Boolean for Format of comment Fetched from Back end
 *
 * @returns {React.Component} --Comment Component
 */
function Comment(props) {
  // props
  const {
    commentprop, isLastChild, remainingSiblings, loadMoreRepliesParentFun, continueThreadParentFun, moreRepliesFormatPar,
  } = props;

  // states
  const [collpase, setCollapse] = useState(false);
  const [comment, setComment] = useState(commentprop);
  const [replies, setReplies] = useState(comment?.replies);
  const [editComment, setEditComment] = useState(false);

  // useEffect
  useEffect(() => {
    setComment(commentprop);
    console.log('commentPrp', commentprop);
  }, [commentprop]);
  // Constants
  const authorProfilelink = `/user/${comment?.author?.userName}`;

  // True if there is moreReplies object
  const moreRepliesFormat = (replies) ? replies[replies.length - 1]?.Type === 'moreReplies' : false;
  const lastChild = (replies) ? (moreRepliesFormat ? replies.length - 2 : replies.length - 1) : -1;
  const remainingSiblingsCountVar = (replies && moreRepliesFormat) ? replies[replies.length - 1]?.count : 0;

  // constants of tree Structure
  const limitForMoreReplies = (moreRepliesFormatPar === true) ? remainingSiblings : (0);
  const depthforMoreReplies = 8;

  // Functions
  const toggleComment = () => {
    setCollapse(!collpase);
  };

  // The parent Comment refreshes his replies
  // new Replies=>Array of strings of new repleis to be added to this replies
  const loadMoreReplies = () => {
    console.log('More Comemts on the Parent Post');
    console.log('Comments List ::::::)', replies);

    // replies here can't be empty because the butotn called by this fucntion won't appear if it is empty :)
    // Call API of more Children
    getMoreChildren({
      children: replies[replies.length - 1]?.children, // Remaining Children IDs (Level 0 Comments)
      // limit: limitForMoreReplies, // How many more commenets to be loaded Vertically
      depth: depthforMoreReplies,
    }, replies, setReplies);
  };

  const moreReplies = isLastChild && remainingSiblings > 0;
  // const continueThread = !moreReplies && isLastChild && (replies is Array of strings));
  const continueThread = !moreReplies && isLastChild && comment?.replies?.length > 0 && (typeof replies[0] === 'string');

  return (
    <>
      <CommentContainer>
        {!collpase ? null
          : <OpenInFullRoundedIcon color="primary" fontSize="small" onClick={toggleComment} sx={{ marginTop: '5px' }} />}
        <CommentLeftSideBar>
          <ImgAvatar alt={comment?.author?.userName} src={comment?.author?.profilePicture} />
          <CommentAlign orientation="vertical" flexItem onClick={toggleComment} />
        </CommentLeftSideBar>

        <CommentBody>
          <CommentHeader>
            <ImgAvatarSmall alt={comment?.author?.userName} src={comment?.author?.profilePicture} />
            <AuthorLink href={authorProfilelink}>
              {comment?.author?.userName}
            </AuthorLink>
            <Duration>{comment ? calculateTime(comment?.createdAt) : null}</Duration>
          </CommentHeader>
          {collpase ? null
            : (
              <>
                <CommentText><div dangerouslySetInnerHTML={{ __html: comment?.text }} /></CommentText>
                {editComment ? <EditComment comment={comment} setComment={setComment} setEditComment={setEditComment} /> : <CommentActions comment={comment} setComment={setComment} replies={replies} setReplies={setReplies} setEditComment={setEditComment} />}
                {/* Loop Over All array of Replies on This Comment */}
                {continueThread ? null
                  : replies?.map((reply, i) => {
                    if (i === replies.length - 1 && moreRepliesFormat) { return null; }
                    return (<Comment key={reply?._id} commentprop={reply} isLastChild={i === lastChild} remainingSiblings={remainingSiblingsCountVar} loadMoreRepliesParentFun={loadMoreReplies} continueThreadParentFun={continueThreadParentFun} moreRepliesFormatPar={moreRepliesFormat} />);
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
          {limitForMoreReplies}
          {' '}
          more replies
        </MoreCommentsLink>
      ) : null}
    </>
  );
}

export default Comment;
