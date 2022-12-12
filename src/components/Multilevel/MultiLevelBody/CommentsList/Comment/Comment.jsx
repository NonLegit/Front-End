// MUI Components
import { Divider } from '@mui/material';

// Utlis
import calculateTime from '../../../../../utils/calculateTime';

// Styling
import {
  AuthorLink,
  CommentAlign,
  CommentBody, CommentContainer, CommentContent, CommentHeader, Duration, ImgAvatar,
} from './styles';

function Comment(props) {
  const { comment, src } = props;

  // Constants
  const authorProfilelink = `../../../../../user/${comment?.author}`;

  return (
    <CommentContainer>
      {/* {comment?.id} */}
      {/* {comment?.author} */}
      {/* Comment Header = row = Avatar + Author +Time */}
      <CommentHeader>
        <ImgAvatar alt={comment?.author} src={src} />
        <AuthorLink href={authorProfilelink}>{comment?.author}</AuthorLink>
        <Duration>{comment ? calculateTime(comment?.createdAt) : null}</Duration>
      </CommentHeader>
      {/* Comment Body = row = divider + comment Content */ }
      <CommentBody>
        <CommentAlign />
        <CommentContent>
          {comment?.post}
        </CommentContent>
        <Divider orientation="vertical" flexItem />

      </CommentBody>

    </CommentContainer>
  );
}

export default Comment;
