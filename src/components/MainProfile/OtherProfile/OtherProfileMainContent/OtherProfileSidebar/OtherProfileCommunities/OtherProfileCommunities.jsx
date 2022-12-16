import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { InfoBox } from '../styles';
import { otherProfileCommunitiesServer } from './otherProfileCommunitiesServer';
import OtherProfileEntityComment from './OtherProfileEntityCommunity/OtherProfileEntityCommunity';

/**
 * all comunities you afre a moderator of
 *
 * @component OtherProfileCommunities
 * @returns {React.Component} OtherProfileCommunities
 */

function OtherProfileCommunities() {
  // will fetch the comminities here
  const { username } = useParams();
  const [communities] = otherProfileCommunitiesServer(username);
  return (
    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>Moderator of these communities</Typography>
      {communities?.map((community, index) => (
        <OtherProfileEntityComment key={`${index + 0}`} community={community} username={username} />
      ))}
    </InfoBox>
  );
}

export default OtherProfileCommunities;
