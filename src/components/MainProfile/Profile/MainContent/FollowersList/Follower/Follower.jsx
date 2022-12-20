import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { followRequest } from '../../../../mainProfileServer';
import {
  FollowerBox, FollowerPhoto, FollowingButton, LinkToProfile,
} from './styles';

function Follower({ follower }) {
  const [following, setFollowing] = useState(undefined);
  const [isFollowedUi, setIsFollowedUi] = useState(undefined);

  useEffect(() => {
    setFollowing(follower.isFollowed);
    setIsFollowedUi(follower.isFollowed);
  }, [follower]);

  followRequest(follower.userName, following, () => { setIsFollowedUi((prev) => !prev); });

  const handleClickFollow = () => {
    setFollowing((prev) => !prev);
  };

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
      {isFollowedUi ? <FollowingButton onClick={handleClickFollow}>Following</FollowingButton> : <FollowingButton notfollowing="true" onClick={handleClickFollow}>Follow</FollowingButton>}
    </FollowerBox>
  );
}

export default Follower;
