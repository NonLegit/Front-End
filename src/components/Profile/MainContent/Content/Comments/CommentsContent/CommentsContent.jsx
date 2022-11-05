import { Box, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { CommentText } from '../styles';
import { CommentsBoxBlue, CommentsBoxContent } from './styles';

function CommentsContent(props) {
  const {
    username,
    points,
    time,
  } = props;
  return (
    <CommentsBoxContent>
      <CommentsBoxBlue>
        <Box sx={{ display: 'flex' }}>
          <CommentText variant="caption" coloring="black">
            {username}
          </CommentText>
          <CommentText variant="caption" coloring="#787c7e">
            {points}
            {' '}
            point .
            {' '}
            {time}
            {' '}
            ago
          </CommentText>
        </Box>
        <Box><CommentText variant="body2" coloring="black">Welcome Asmaa</CommentText></Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CommentText variant="caption" coloring="#787c7e" hover sx={{ fontWeight: 700 }}>Reply</CommentText>
          <CommentText variant="caption" coloring="#787c7e" hover sx={{ fontWeight: 700 }}>Share</CommentText>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Box>
      </CommentsBoxBlue>
    </CommentsBoxContent>
  );
}

export default CommentsContent;
