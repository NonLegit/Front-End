import { Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { CommunitiesContext } from '../../../../../../contexts/CommunitiesProvider';

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
  const { communities, communitiesError, statusCode } = useContext(CommunitiesContext);
  useEffect(() => {
    if (statusCode === 401) {
      window.location.href = './login';
    }
  }, [statusCode]);

  return (
    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>Moderator of these communities</Typography>
      {!communitiesError && communities?.map((community, index) => (
        <OtherProfileEntityComment key={`${index + 0}`} community={community} />
      ))}
    </InfoBox>
  );
}

export default OtherProfileCommunities;
