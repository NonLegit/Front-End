import { Box, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext } from 'react';
import { UserContext } from '../../../../../../context/UserProvider';

import { CommentText } from '../styles';
import { CommentsBoxBlue, CommentsBoxContent } from './styles';

// calculate the time difference between post creation and current date
const calculateTime = (d, time) => {
  const year = d.getFullYear() - time.split('T')[0].split('-')[0];
  const month = d.getMonth() - time.split('T')[0].split('-')[1];
  const day = d.getDate() - time.split('T')[0].split('-')[2];

  if (year > 0) {
    return (`${year} years ago`);
  }
  if (month > 0) {
    return (`${month} months ago`);
  }
  if (day > 0) {
    return (`${day} days ago`);
  }
  return ('today');
};

/**
 * the Body of an comment
 *
 * @component OtherProfileCommentsContent
 * @property {string} points - number of points the comment did get
 * @property {string} time - time of creating the comment
 * @property {string} body - the body paragraph of the comment
 * @returns {React.Component} OtherProfileCommentsContent
 */

function OtherProfileCommentsContent(props) {
  const {
    points,
    time,
    body,
  } = props;
  const { username } = useContext(UserContext);
  const d = new Date();
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
            {calculateTime(d, time)}
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

export default OtherProfileCommentsContent;
