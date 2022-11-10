/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import MuiToolbar from '@mui/material/toolbar';
import StyledNavbar from './styles';
import HomeList from './HomeList/HomeList';
import UserList from './UserList/UserList';
import SearchButton from './Search/Search';
import NavIcons from './NavIcons/NavIcons';
import LogoIcon from './Logo/logoIcon';

function Navbar() {
  return (
    <StyledNavbar>
      <MuiToolbar>
        <Box sx={{
          display: 'flex', width: '100%', alignItems: 'center', flexGrow: 1,
        }}
        >
          <LogoIcon />
          <HomeList />
          <SearchButton />
        </Box>
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        }}
        >
          <NavIcons />
          <UserList />
        </Box>
      </MuiToolbar>
    </StyledNavbar>
  );
}

export default Navbar;
