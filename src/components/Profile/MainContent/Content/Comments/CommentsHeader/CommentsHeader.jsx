import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { CommentText } from '../styles';
import CommentsBoxHeader from './styles';
// import { CommentsBoxHeader } from './styles';

function CommentsHeader(props) {
  const {
    subReddit, username, publisher, title,
  } = props;
  return (

    <CommentsBoxHeader>
      <ChatBubbleOutlineOutlinedIcon />
      <CommentText
        variant="caption"
        hover
      >
        {username}

      </CommentText>
      <CommentText variant="caption" coloring="#787c7e">
        commented on
        {' '}
        {title}
        {' '}
        .
      </CommentText>
      <CommentText variant="caption" coloring="black" hover sx={{ fontWeight: 700 }}>
        u/
        {subReddit}
        {' '}
        .
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e">
        Posted by
      </CommentText>
      <CommentText variant="caption" coloring="#787c7e" hover>
        {publisher}
      </CommentText>
    </CommentsBoxHeader>

  );
}

export default CommentsHeader;
