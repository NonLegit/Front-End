/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import MuiToolbar from '@mui/material/toolbar';
import StyledNavbar from './styles';
import HomeList from './HomeList/HomeList';
import UserList from './UserList/UserList';
import SearchButton from './Search/Search';
import NavIcons from './NavIcons/NavIcons';
import LogoIcon from './Logo/logoIcon';
import UserInfoProvider from '../../../contexts/UserInfoProvider';
/**
 * Navbar
 * @component
 * @returns {React.Component} the whole logged in navbar with the two lists,
 * Search bar and icon buttons
 */
function Navbar() {
  return (
    window.location.pathname !== '/login'
    && window.location.pathname !== '/password'
    && window.location.pathname !== '/register'
    && window.location.pathname !== '/username'
    && (
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
          <UserInfoProvider>
            <UserList />
          </UserInfoProvider>
        </Box>
      </MuiToolbar>
    </StyledNavbar>
    )
  );
}

export default Navbar;
