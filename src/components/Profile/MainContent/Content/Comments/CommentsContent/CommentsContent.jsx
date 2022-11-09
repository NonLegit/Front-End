import { Box, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext } from 'react';
/* eslint-disable import/no-cycle */
import { UserContext } from '../../../MainContent';

import { CommentText } from '../styles';
import { CommentsBoxBlue, CommentsBoxContent } from './styles';

function CommentsContent(props) {
  const {
    points,
    time,
    body,
  } = props;
  const {
    username,
  } = useContext(UserContext);
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
        <Box><CommentText variant="body2" coloring="black">{body}</CommentText></Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CommentText variant="caption" coloring="#787c7e" hover="true" sx={{ fontWeight: 700 }}>Reply</CommentText>
          <CommentText variant="caption" coloring="#787c7e" hover="true" sx={{ fontWeight: 700 }}>Share</CommentText>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Box>
      </CommentsBoxBlue>
    </CommentsBoxContent>
  );
}

export default CommentsContent;
