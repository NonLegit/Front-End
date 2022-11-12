import { Typography } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../../../context/UserProvider';
import { InfoBox } from '../styles';
import OtherProfileEntityComment from './OtherProfileEntityCommunity/OtherProfileEntityCommunity';

/**
 * all comunities you afre a moderator of
 *
 * @component OtherProfileCommunities
 * @returns {React.Component} OtherProfileCommunities
 */

function OtherProfileCommunities() {
  // will fetch the comminities here
  const [communities, setCommunities] = useState();
  const {
    username,
  } = useContext(UserContext);

  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });

  // fetch data of communities i am a moderator of

  useEffect(() => {
    client.get(`subreddit/mine/${username}/200`) // fetch api
      .then((actualData) => {
        setCommunities(actualData.data.subreddits);
        // setCommunities(actualData.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>Moderator of these communities</Typography>
      {communities?.map((community, index) => (
        <OtherProfileEntityComment key={`${index + 0}`} community={community} />
      ))}
    </InfoBox>
  );
}

export default OtherProfileCommunities;
