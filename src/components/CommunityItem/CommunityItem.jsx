import {
  Box,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  CommunityName, CommunityImage, CommunityIndex, CommunityListItem,
} from './styles';
import JoinButton from '../JoinButton/JoinButton';

function CommunityItem({ index, image, name }) {
  return (
    <CommunityListItem>
      <CommunityIndex>
        {index}
      </CommunityIndex>
      <KeyboardArrowUpIcon sx={{ color: '#46d160' }} />
      <CommunityImage
        src={image}
      />
      <CommunityName variant="caption">
        {name}
      </CommunityName>
      <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <JoinButton />
      </Box>
    </CommunityListItem>
  );
}

export default CommunityItem;
