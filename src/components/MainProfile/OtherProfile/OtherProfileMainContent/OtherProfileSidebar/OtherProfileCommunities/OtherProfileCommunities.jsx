import { Typography } from '@mui/material';
import { InfoBox } from '../styles';
import otherProfileCommunitiesServer from './otherProfileCommunitiesServer';
import OtherProfileEntityComment from './OtherProfileEntityCommunity/OtherProfileEntityCommunity';

/**
 * all comunities you afre a moderator of
 *
 * @component OtherProfileCommunities
 * @returns {React.Component} OtherProfileCommunities
 */

function OtherProfileCommunities() {
  // will fetch the comminities here
  const [communities] = otherProfileCommunitiesServer();

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
