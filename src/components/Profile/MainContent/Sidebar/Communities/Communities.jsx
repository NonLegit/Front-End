import { Box, Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../../../context/UserProvider';
import { InfoBox } from '../styles';
import {
  ComminityBox, HeaderAvatar, HeaderAvatarText, Joined, SubReddit,
} from './styles';

/** all comunities you afre a moderator of
 * @return {React.Component} - Communities
 */
function Communities() {
  // will fetch the comminities here
  const [communities, setCommunities] = useState();
  const {
    username,
  } = useContext(UserContext);

  const client = axios.create({
    baseURL: 'https://eec81823-8c2a-4b43-a068-05d358081539.mock.pstmn.io',
  });

  // fetch data of communities i am a moderator of
  useEffect(() => {
    client.get(`subreddit/mine/${username}/200`) // fetch api
      .then((actualData) => {
        console.log(actualData.data.subreddits);
        setCommunities(actualData.data.subreddits);
        // setCommunities(actualData.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>You&apos;re a moderator of these communities</Typography>
      {communities?.map((community, index) => (
        <ComminityBox key={`${index + 0}`}>
          <HeaderAvatar>
            <HeaderAvatarText>r/</HeaderAvatarText>
          </HeaderAvatar>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubReddit to={`/r/${community.subredditName}`}>
              r/
              {community.subredditName}
            </SubReddit>
            <Typography sx={{ fontSize: 12 }}>{community.membersCount}</Typography>
          </Box>
          <Joined variant="outlined" onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Joined>
        </ComminityBox>
      ))}
    </InfoBox>
  );
}

export default Communities;
