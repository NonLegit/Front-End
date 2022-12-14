import { Box, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext } from 'react';
import moment from 'moment/moment';
import { UserContext } from '../../../../../../../contexts/UserProvider';

import { CommentText } from '../styles';
import { CommentsBoxBlue, CommentsBoxContent } from './styles';

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
            {(moment.utc(time).local().startOf('seconds')
              .fromNow())}
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
