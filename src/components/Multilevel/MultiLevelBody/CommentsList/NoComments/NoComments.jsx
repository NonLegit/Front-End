// MUI Components
import { Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

// styles
import { NoCommentsConatiner } from './styles';

function NoComments() {
  return (
    <NoCommentsConatiner>
      <ForumIcon color="primary" fontSize="large" />
      <Typography paragraph>No Comments Yet</Typography>
      <Typography paragraph>Be the first to share what you think!</Typography>
    </NoCommentsConatiner>
  );
}

export default NoComments;
