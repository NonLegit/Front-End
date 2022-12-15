import { Typography } from '@mui/material';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import { useParams } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { HeaderAvatar, HeaderAvatarText } from '../../../ModerationHeader/styles';
import { ApprovedBox, HeaderPost, RemovalBox } from './styles';

function HeaderQueue(props) {
  const { subReddit } = useParams();
  const nameUser = 'NourTest';
  const Time = '6 days ago';
  const { subTitle } = props;
  return (
    <HeaderPost>
      <HeaderAvatar>
        <HeaderAvatarText>r/</HeaderAvatarText>
      </HeaderAvatar>
      <Typography variant="caption" sx={{ fontWeight: 700, marginLeft: 1 }}>
        r/
        {subReddit}
        {' '}
        .
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        Posted by u/
        {nameUser}
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

export default HeaderQueue;
