import { useState } from 'react';

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

function Comment(props) {
  const { comment, src } = props;

  // Constants
  const authorProfilelink = `./user/${comment?.author}`;
  const replies = (comment) ? comment.replies : [];
  const depth = comment ? comment.depth : -1;// The comment's Depth from the Post

  // state
  const [collpase, setCollapse] = useState(false);

  // Functions
  const toggleComment = () => {
    // console.log('Comment', comment?._id, 'Collpased');
    setCollapse(!collpase);
  };

  return (
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
          </p>
        </CommentHeader>
        {collpase ? null
          : (
            <>
              <CommentText>{comment?.post}</CommentText>
              <CommentActions />
              {replies?.map((reply) => <Comment key={reply?._id} comment={reply} src="https://styles.redditmedia.com/t5_74w4tr/styles/profileIcon_9or0sb8dtc5a1.jpeg?width=256&height=256&crop=256:256,smart&s=2a8b7dc794b00e51a6b9f423da2204a999136ecb" />)}
              <p>Continue Thread</p>
            </>
          )}
      </CommentBody>

    </CommentContainer>
  );
}

export default Comment;
