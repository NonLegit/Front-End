/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Box } from '@mui/material';
import MuiToolbar from '@mui/material/toolbar';

import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';

import { createContext } from 'react';
import RedditButton from './RedditButton/RedditButton';
import {
  StyledNavbar, HomeButton,
} from './styles';
import SearchButton from './Search/Search';
import LogoIcon from '../Navbar/Logo/LogoIcon';
import SignUp from './SignUpPopUp/SignUp';
import LogIn from './LogInPopUp/LogIn';
import ForgetUsername from './ForgetUserNamePopUp/ForgetUser';
import ForgetPassword from './ForgetPassPopUp/ForgetPass';
import UserList from './UserList/UserList';
import PermanentDrawerLeft from './Drawer/Drawer';
import DrawerBottom from './DrawerBottom/DrawerBottom';
import HomeList from './HomeList/HomeList';

export const signupContext = createContext();
export const loginContext = createContext();
export const forgetUserContext = createContext();
export const forgetPassContext = createContext();

/**
 * signed out mode navbar different components
 * @returns {React.Component} main body of navbar in signed out mode
 */
function SNavbar() {
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const [openLogIn, setOpenLogIn] = React.useState(false);

  const [openForgotUser, setOpenForgotUser] = React.useState(false);

  const [openForgotpass, setOpenForgotpass] = React.useState(false);

  const handleClose = () => {
    setOpenForgotpass(false);
    setOpenForgotUser(false);
    setOpenLogIn(false);
    setOpenSignUp(false);
  };

  const handleClickOpenSignUp = () => {
    handleClose();
    setOpenSignUp(true);
  };

  const handleClickOpenLogIn = () => {
    handleClose();
    setOpenLogIn(true);
  };

  const handleClickOpenForgotUser = () => {
    handleClose();
    setOpenForgotUser(true);
  };

  const handleClickOpenForgotPass = () => {
    handleClose();
    setOpenForgotpass(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledNavbar>
        <MuiToolbar>
          <Box sx={{
            display: 'flex', width: '100%', alignItems: 'center', flexGrow: 1,
          }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <LogoIcon />
              <HomeList />

              <HomeButton startIcon={<HomeIcon />}>
                Home
              </HomeButton>
              <SearchButton />

            </Box>
          </Box>
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          }}
          >
            <Box sx={{ display: 'flex', width: 'auto' }}>
              <RedditButton
                data-testid="navbar-signup"
                fontSize="14px"
                padding="4px 16px"
                fontWeight="700"
                variant="outlined"
                margin="0px"
                onClick={handleClickOpenSignUp}
              >
                sign up
              </RedditButton>
              <RedditButton
                data-testid="navbar-login"
                fontSize="14px"
                padding="4px 16px"
                fontWeight="700"
                variant="contained"
                margin="0px 0px 0px 16px"
                onClick={handleClickOpenLogIn}
              >
                log in
              </RedditButton>
            </Box>

            <signupContext.Provider value={{
              openSignUp, handleClose, handleClickOpenLogIn,
            }}
            >
              <SignUp />
            </signupContext.Provider>

            <loginContext.Provider value={{
              openLogIn,
              handleClose,
              handleClickOpenForgotUser,
              handleClickOpenForgotPass,
              handleClickOpenSignUp,
            }}
            >
              <LogIn />
            </loginContext.Provider>

            <forgetUserContext.Provider value={{
              openForgotUser,
              handleClose,
              handleClickOpenSignUp,
              handleClickOpenLogIn,
            }}
            >
              <ForgetUsername />
            </forgetUserContext.Provider>

            <forgetPassContext.Provider value={{
              openForgotpass,
              handleClose,
              handleClickOpenForgotUser,
              handleClickOpenSignUp,
              handleClickOpenLogIn,
            }}
            >
              <ForgetPassword />
            </forgetPassContext.Provider>

            <UserList logInPopup={handleClickOpenLogIn} />
          </Box>
        </MuiToolbar>
      </StyledNavbar>
      <Box sx={{
        display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute',
      }}
      >
        <PermanentDrawerLeft />
        <DrawerBottom logInPopup={handleClickOpenLogIn} />
      </Box>
    </Box>
  );
}

export default SNavbar;
