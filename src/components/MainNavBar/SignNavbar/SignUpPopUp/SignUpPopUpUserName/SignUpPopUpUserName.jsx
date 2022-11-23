/* eslint-disable import/no-cycle */
import { useState, useEffect, useContext } from 'react';

// mui components
import {
  Box, Typography, InputAdornment,
} from '@mui/material';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

// Componenets
import PasswordStrengthBar from 'react-password-strength-bar';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthenticationHeader from '../../../../Authentication/AuthenticationHeader/AuthenticationHeader';
// contexts
import { SignupContext } from '../../SignNavbar';

// server
import { checkUserNameSignUp, signUp, generateRandomUsernamesServer } from '../../../../Authentication/SignUp/SignUpUsername/server';

// scripts
import { checkPassword } from '../../../../Authentication/scripts';

// styles
import { StyledDialog } from '../../styles';
import { RedditTextField, RedditLoadingButton } from '../../ِAuthentication/styles';
import theme, { fonts } from '../../../../../styles/theme';

/**
 *  SignUp UseerName popUp
 * @component
 * SignUp UseerName Differenet Components
 * @returns {React.Component} - Main Body of SignUp UseerName PopUp
 */
function SignUpPopUpUserName({
  setUserNamePage, email, userName, setUserName, password, setPassword, setCookies,
}) {
  // states
  const [defaultUserNameValue, setdefaultUserNameValue] = useState(userName?.input);
  const [defaultPasswordValue, setdefaultPasswordValue] = useState(password?.input);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonTxt, setButtonText] = useState('Sign up');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [click, setClick] = useState(false);

  // server generate Random Names
  const generatedUsernames = generateRandomUsernamesServer(1, click);

  // useContext
  const {
    // eslint-disable-next-line no-unused-vars
    openSignUp, handleClose, handleClickOpenLogIn, handleClickOpenSignUp, openSignUpUsername, handleClickOpenSignUpUsername,
  } = useContext(SignupContext);

  const caption = (
    <>
      Reddit is anonymous, so your username is what
      you’ll go by here. Choose wisely—because once
      you get a name, you can’t change it.
    </>

  );

  const refreshIcon = (
    <InputAdornment
      position="end"
    >
      <PublishedWithChangesIcon onClick={() => {
        setClick(!click);
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.primary.main,
          error: null,
          input: generatedUsernames[0],
        }));
        setdefaultUserNameValue(generatedUsernames[0]);
      }}
      />
    </InputAdornment>
  );

  // useEffect
  useEffect(() => {
    console.log(generatedUsernames);
    if (generatedUsernames === null) {
      return;
    }
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.primary.main,
      error: null,
      input: generatedUsernames[0],
    }));
    setdefaultUserNameValue(generatedUsernames[0]);
  }, [generatedUsernames]);

  const signUpFunction = () => {
    // console.log(userName);
    checkUserNameSignUp(userName?.input, setUserName);
    checkPassword(password?.input, setPassword, password);
    signUp(email, userName, setUserName, password, setPassword, verified, setLoading, setButtonText, setDisabled, setRedirectCaption, setCookies, true, handleClose);
  };
  return (

    <StyledDialog
      data-testid="SignUpUserName-popup"
      fullscreen
      open={openSignUpUsername}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box width="280px" height="454px">
        <CloseIcon
          sx={{
            position: 'absolute', right: '16px', top: '16px', cursor: 'pointer',
          }}
          onClick={handleClose}
        />
        <ArrowBackIcon
          sx={{
            position: 'absolute', left: '16px', top: '16px', cursor: 'pointer',
          }}
          onClick={() => { if (disabled) return; setUserNamePage(false); handleClickOpenSignUp(); }}
        />
        <AuthenticationHeader reddit={false} title="Create your username and password" caption={caption} />

        <RedditTextField
          label="Username"
          variant="filled"
          required
          InputProps={{
            endAdornment: (
              refreshIcon
            ),
            disableUnderline: true,
          }}
          // endAdornment={(
          //   <InputAdornment position="end">
          //     <IconButton
          //       onClick={handleClickShowPassword}
          //     >
          //       <PublishedWithChangesIcon />
          //     </IconButton>
          //   </InputAdornment>
          // )}
          clr={userName?.color}
          onChange={(e) => {
            setUserName((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }));
            checkUserNameSignUp(e.target.value.trim(), setUserName);
            setdefaultUserNameValue(e.target.value.trim());
          }}
          helperText={userName.error}
          value={defaultUserNameValue || ''}
        />
        <PasswordStrengthBar
          password={password?.input}
          minLength={4}
          onChangeScore={(e) => (setPassword((prevState) => ({
            ...prevState,
            score: e,
          })))}
          scoreWords={[]}
          shortScoreWord=""
        />
        <RedditTextField
          label="Password"
          variant="filled"
          type="password"
          required
          InputProps={{
            endAdornment: (
              password.icon
            ),
            disableUnderline: true,
          }}
          clr={password?.color}
          onChange={(e) => {
            setPassword((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }));
            checkPassword(e.target.value.trim(), setPassword, undefined);
            setdefaultPasswordValue(e.target.value.trim());
          }}
          value={defaultPasswordValue || ''}
          helperText={password?.error}
        />
        <ReCAPTCHA
          sitekey="6LdjH-kiAAAAANFbV6SUnCjXNK3Z0h7q7j4IFf7i"
          onExpired={() => setVerified(false)}
          onChange={() => setVerified(true)}
          size="normal"
          sx={{ width: '320px' }}
        />
        <RedditLoadingButton
          width="155px"
          onClick={signUpFunction}
          loading={loading}
          disabled={disabled}
          data-testid="sigup-btn-test"
        >
          {buttonTxt}
        </RedditLoadingButton>

        {redirectCaption
          ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="auto">You are now logged in. You will soon be redirected</Typography>
          : null}

      </Box>
    </StyledDialog>
  );
}

export default SignUpPopUpUserName;
