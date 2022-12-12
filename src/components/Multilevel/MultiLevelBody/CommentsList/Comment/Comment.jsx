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

  // Functions
  const collapseComment = () => {
    console.log('Comment', comment?.id, 'Collpased');
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
        {/* Children */}
      </CommentBody>
    </CommentContainer>
  );
}

export default Comment;
