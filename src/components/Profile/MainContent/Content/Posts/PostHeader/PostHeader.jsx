import { Typography } from '@mui/material';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderAvatar, HeaderAvatarText, ApprovedBox, HeaderPost, RemovalBox,
} from './styles';

function PostHeader(props) {
  const {
    subTitle, subReddit, nameUser, Time,
  } = props;
  return (
    <HeaderPost>
      {/* OR PHOTO */}
      <HeaderAvatar>
        <HeaderAvatarText>r/</HeaderAvatarText>
      </HeaderAvatar>
      {/* OR PHOTO */}
      <Typography variant="caption" sx={{ fontWeight: 700, marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
        r/
        {subReddit}
        {' '}
        .
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        Posted by
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
        u/
        {nameUser}
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {Time}
      </Typography>
      {((subTitle === 'Spam').toString() === 'true')
      && (
        <RemovalBox>
          <BlockOutlinedIcon fontSize="string" />
          <Typography variant="caption">Add a removal reason</Typography>
        </RemovalBox>
      )}
      {((subTitle === 'Edited').toString() === 'true')
      && (
      <ApprovedBox>
        <CheckCircleIcon fontSize="string" />
      </ApprovedBox>
      )}
    </HeaderPost>
  );
}

export default PostHeader;
