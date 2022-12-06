import {
  Box,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  CommunityName, CommunityImage, CommunityIndex, CommunityListItem,
} from './styles';
import JoinButton from '../../../../../JoinButton/JoinButton';
/**
 * This component represents the community in upper section of home page sidebar.
 *
 * @component CommunityItem
 * @property {number} index -Community index.
 * @property {string} icon -Community icon.
 * @property {string} subredditName -Community name.
 * @property {boolean} status -Community status.
 * @property {boolean} isJoined -Check whether the logged in user is joined that community or not.
 * @returns {React.Component} Communities
 */

function CommunityItem(props) {
  const {
    index, icon, subredditName, status, isJoined,
  } = props;
  return (
    <CommunityListItem data-testid="Community Item">
      <CommunityIndex data-testid="index">
        {index}
      </CommunityIndex>
      {status ? (
        <KeyboardArrowUpIcon
          data-testid="icon up"
          sx={{ color: '#46d160' }}
        />
      ) : (
        <KeyboardArrowDownIcon
          data-testid="icon down"
          sx={{ color: '#ea0027' }}
        />
      )}
      <CommunityImage
        src={icon}
        data-testid="image"
      />
      <CommunityName data-testid="name" variant="caption">
        r/
        {subredditName}
      </CommunityName>
      <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <JoinButton isJoined={isJoined} />
      </Box>
    </CommunityListItem>
  );
}

export default CommunityItem;
