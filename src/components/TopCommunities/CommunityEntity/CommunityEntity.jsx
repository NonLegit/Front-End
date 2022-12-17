import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import { useState } from 'react';
import {
  CommunityName, CommunityImage, CommunityIndex, CommunityListItem, Joined,
} from './styles';
import joinCommunity from '../../MainProfile/joinCommunity';

function CommunityEntity(props) {
  const {
    index, icon, subredditName, status, isJoined, sidebar, members,
  } = props;

  const [joined, setJoined] = useState(isJoined);

  joinCommunity(joined, subredditName);

  const handleJoin = () => {
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
    <CommunityListItem sidebar={sidebar?.toString()} onClick={() => { window.open(`${window.location.protocol}/r/${subredditName}`); }}>
      <CommunityIndex>
        {index}
      </CommunityIndex>
      {status ? (
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
          {members}
        </CommunityIndex>
      </>
      )}

    </CommunityListItem>
  );
}

export default CommunityEntity;
