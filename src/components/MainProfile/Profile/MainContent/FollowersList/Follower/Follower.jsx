import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  FollowerBox, FollowerPhoto, FollowingButton, LinkToProfile,
} from './styles';

function Follower({ follower }) {
  const [following, setFollowing] = useState(undefined);

  useEffect(() => {
    setFollowing(follower.isFollowed === 'true');
  }, [follower]);
  return (
    <FollowerBox>
      <LinkToProfile>
        <FollowerPhoto
          alt={follower.userName}
          src={follower.profilePicture}
          variant="square"
        />
        <Typography>
          {follower.userName}
        </Typography>

      </LinkToProfile>
      {following ? <FollowingButton>Following</FollowingButton> : <FollowingButton notfollowing="true">Follow</FollowingButton>}
    </FollowerBox>
  );
}

export default Follower;
