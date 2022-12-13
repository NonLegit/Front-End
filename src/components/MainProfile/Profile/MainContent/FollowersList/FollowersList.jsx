import { Typography } from '@mui/material';
import { Box } from '@mui/system';
// import { followersServer } from './followersServer';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {
  ContentBox, Search, SearchBox, SearchIconButton,
} from './styles';

function FollowersList() {
//   const [data] = followersServer();

  return (
    <ContentBox>
      <SearchBox>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>Followers</Typography>
          <Typography variant="caption" sx={{ color: '#7c7c7c' }}>This list is only visible to you. The most recent follows are shown first.</Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Search
            component="form"
          >
            <InputBase
              sx={{
                ml: 1, flex: 1, fontSize: '14px', p: '8px',
              }}
              placeholder="Search for a user"
              inputProps={{ 'aria-label': 'Search for a user' }}
            />
            <SearchIconButton
              type="button"
              aria-label="search"
            >
              <SearchIcon sx={{ color: 'white' }} />
            </SearchIconButton>

          </Search>
        </Box>
      </SearchBox>

    </ContentBox>
  );
}

export default FollowersList;
