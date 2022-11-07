import { Box, Typography } from '@mui/material';
import { InfoBox } from '../styles';
import {
  ComminityBox, HeaderAvatar, HeaderAvatarText, Joined, SubReddit,
} from './styles';

function Communities() {
  const communities = [
    { id: 1, name: 'basma', number: '3 Members' },
    { id: 2, name: 'basma2', number: '6 Members' },
    { id: 3, name: 'basma3', number: '8 Members' },
    { id: 4, name: 'basma4', number: '9 Members' },
  ];
  return (

    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>You&apos;re a moderator of these communities</Typography>
      {communities.map((community) => (
        <ComminityBox>
          <HeaderAvatar>
            <HeaderAvatarText>r/</HeaderAvatarText>
          </HeaderAvatar>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubReddit to={`/r/${community.name}`}>
              r/
              {community.name}
            </SubReddit>
            <Typography sx={{ fontSize: 12 }}>community.number</Typography>
          </Box>
          <Joined variant="outlined" onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Joined>
        </ComminityBox>
      ))}
    </InfoBox>
  );
}

export default Communities;
