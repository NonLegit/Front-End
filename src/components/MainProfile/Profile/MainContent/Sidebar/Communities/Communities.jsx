import { Typography } from '@mui/material';
import { useContext } from 'react';

import { CommunitiesContext } from '../../../../../../contexts/CommunitiesProvider';
import { InfoBox } from '../styles';
import EntityComment from './EntityCommunity/EntityCommunity';

/**
 * all comunities you afre a moderator of
 *
 * @component Communities
 * @returns {React.Component} Communities
 */

function Communities() {
  // will fetch the comminities here
  const { communities, communitiesError } = useContext(CommunitiesContext);
  return (
    <InfoBox>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>You&apos;re a moderator of these communities</Typography>
      {!communitiesError && communities?.map((community, index) => (
        <EntityComment key={`${index + 0}`} community={community} />
      ))}
    </InfoBox>
  );
}

export default Communities;
