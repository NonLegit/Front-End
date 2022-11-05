import {
  Box,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  CommunityName, CommunityImage, CommunityIndex, CommunityListItem,
} from './styles';
import JoinButton from '../JoinButton/JoinButton';

function CommunityItem(props) {
  const {
    index, image, name, status,
  } = props;
  console.log(props);
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
        src={image}
        data-testid="image"
      />
      <CommunityName data-testid="name" variant="caption">
        {name}
      </CommunityName>
      <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <JoinButton />
      </Box>
    </CommunityListItem>
  );
}

export default CommunityItem;
