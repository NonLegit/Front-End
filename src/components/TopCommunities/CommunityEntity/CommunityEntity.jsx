import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  CommunityName, CommunityImage, CommunityIndex, CommunityListItem, Joined,
} from './styles';
import numFormatter from '../../../utils/MembersNum';
import PostJoin from '../../SubReddit/PostJoin';

function CommunityEntity(props) {
  const {
    index, icon, subredditName, status, isJoined, sidebar, members,
  } = props;

  const [joined, setJoined] = useState(isJoined);
  const [showStatus, setShowStatus] = useState(true);

  useEffect(() => {
    setShowStatus(status);
  }, [status]);

  const handleJoin = () => {
    PostJoin(`/subreddits/${subredditName}/subscribe`, joined ? 'unsub' : 'sub');

    setJoined((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <CommunityListItem sidebar={sidebar?.toString()}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          flex: '1 1 100%',
          flexWrap: 'wrap',
        }}
        onClick={() => { window.open(`${window.location.protocol}/r/${subredditName}`); }}
      >
        <CommunityIndex>
          {index}
        </CommunityIndex>
        {showStatus ? (
          <KeyboardArrowUpIcon
            sx={{ color: '#46d160' }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{ color: '#ea0027' }}
          />
        )}
        <CommunityImage
          sidebar={sidebar?.toString()}
          src={icon}
        />
        <CommunityName variant="caption">
          r/
          {subredditName}
        </CommunityName>

      </Box>
      {!sidebar && (
      <>
        <Box sx={{ position: 'absolute', right: 100 }}>
          {!isJoined && (
          <Joined
            variant="contained"
            onClick={handleJoin}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
          >
            {(joined ? (hover ? 'Leave' : 'Joined') : 'Join')}
          </Joined>
          )}
        </Box>
        <CommunityIndex sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: '1' }}>
          {numFormatter(members) }
        </CommunityIndex>
      </>
      )}

    </CommunityListItem>
  );
}

export default CommunityEntity;