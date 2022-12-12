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

function Comment(props) {
  const { comment, src } = props;

  // Constants
  const authorProfilelink = `./user/${comment?.author}`;
  const replies = (comment) ? comment.replies : [];

  // Functions
  const collapseComment = () => {
    console.log('Comment', comment?._id, 'Collpased');
  };

  return (
    <CommentContainer>
      <CommentLeftSideBar>
        <ImgAvatar alt={comment?.author} src={src} />
        <CommentAlign orientation="vertical" flexItem onClick={collapseComment} />
      </CommentLeftSideBar>
      <CommentBody>
        <CommentHeader>
          <AuthorLink href={authorProfilelink}>{comment?.author}</AuthorLink>
          <Duration>{comment ? calculateTime(comment?.createdAt) : null}</Duration>
        </CommentHeader>
        <CommentText>{comment?.post}</CommentText>
        <CommentActions />
        {/* Replies */}
        {replies?.map((reply) => <Comment key={reply?._id} comment={reply} src="https://styles.redditmedia.com/t5_74w4tr/styles/profileIcon_9or0sb8dtc5a1.jpeg?width=256&height=256&crop=256:256,smart&s=2a8b7dc794b00e51a6b9f423da2204a999136ecb" />)}
      </CommentBody>
    </CommentContainer>
  );
}

export default Comment;
