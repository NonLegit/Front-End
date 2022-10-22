import {
  ListItem, Box,
} from '@mui/material';
import RedditButton from '../RedditButton/RedditButton';

import { CommunityName, CommunityImage, CommunityIndex } from './styles';

function CommunityItem({ index, image, name }) {
  return (
    <ListItem>
      <CommunityIndex>
        {index}
      </CommunityIndex>
      <CommunityImage
        src={image}
      />
      <CommunityName variant="caption">
        {name}
      </CommunityName>
      <Box flexGrow={1} display="flex" justifyContent="flex-end">
        <RedditButton
          fontSize={12}
          padding="2px 16px"
          variant="contained"
          fontWeight="bold"
        >
          join
        </RedditButton>
      </Box>
    </ListItem>
  );
}

export default CommunityItem;
