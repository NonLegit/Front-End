import { useEffect, useState } from 'react';
import axios from 'axios';

// mui components
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

// componnets
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';

// styles
import {
  AuthenticationBody, FirstPartyContainer, StyledLink, RedditTextField,
  wrongIcon, rightIcon, RedditLoadingButton,
} from '../styles';
import theme, { fonts } from '../../../styles/theme';

/**
 * Component for Forget Password Page
 *
 * @component
 * @returns {React.Component} --ForgetPassword Page Component
 */
function ForgetPassword() {
  // states
  const [remeberMe, setremeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonText, setbuttonText] = useState('Reset Password');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  useEffect(() => {
    // check if connected Cookies
    //= >Check for cookies from BE
    setremeberMe(false);
  }, []);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  const checkUserName = (username) => {
    // Check Username bwteen 3-20 characters
    if (username.length < 3 || username.length > 20) {
      console.log('length problem');
      setUserName((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Username must be between 3 and 20 characters',
      }));
      return;
    }
    // else Valid
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.primary.main,
      icon: rightIcon,
      error: null,
    }));
  };

  const checkEmail = (emailInput) => {
    if (emailInput === '') {
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Please enter an email address to continue',
      }));
    } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Please fix your email to continue',
      }));
    } else {
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.primary.main,
        icon: rightIcon,
        error: null,
      }));
    }
  };

  const recoverPassword = () => {
    setLoading(true);
    // Setting error in case of first time
    checkEmail(email.input);
    checkUserName(userName.input);

    // Case he didn't enter anything
    if (email.input === '' || userName.input === '') {
      setLoading(false);
      return;
    }

    // There are some errors in the email or username
    if (email.error != null || userName.error != null) {
      setLoading(false);
      return;
    }
    axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/forgot_password/204', { email: email.input, userName: userName.input }).then((response) => {
      // console.log(response);
      if (response.status === 204) {
        setTimeout(() => {
          setLoading(false);
          setDisabled(true);
          setbuttonText(<DoneIcon />);
          setRedirectCaption(true);
        }, 1000);
      }
    }).catch((error) => {
      setLoading(false);
      if (error.response.status === 400) {
        // =>check with back
        // "status": "string",
        // "errorMessage": "string"
      }
      console.log(error);
    });
  };

  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="forgetpassword-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
          <FirstPartyContainer noValidate onSubmit={(e) => { e.preventDefault(); recoverPassword(); }}>
            <RedditTextField
              label="Username"
              variant="filled"
              type="text"
              required
              InputProps={{
                endAdornment: (
                  userName.icon
                ),
                disableUnderline: true,
              }}
              clr={userName.color}
              onChange={(e) => {
                setUserName((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkUserName(e.target.value.trim());
              }}
              helperText={userName.error}
              data-testid="forgetpassword-username-input"
            />

            <RedditTextField
              label="Email Address"
              variant="filled"
              required
              InputProps={{
                endAdornment: (
                  email.icon
                ),
                disableUnderline: true,
              }}
              clr={email.color}
              onChange={(e) => {
                setEmail((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkEmail(e.target.value.trim());
              }}
              helperText={email.error}
              data-testid="forgetpassword-email-input"
            />
            <RedditLoadingButton type="submit" width="155px" loading={loading} disabled={disabled} data-testid="reset-password-btn-test">
              {buttonText}
            </RedditLoadingButton>
            {redirectCaption
              ? (
                <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px" data-testid="forgetpassword-redirect-caption-test">
                  Thanks! If your Reddit username and email address match, you’ll get an email with a link to reset your password shortly.
                </Typography>
              )
              : null}
            <StyledLink href="/username" fontWeight="600" capital="uppercase">FORGOT USERNAME?</StyledLink>
          </FirstPartyContainer>
          <Typography paragraph fontSize="12px" margin="10px 0px">
            Don’t have an email or need assistance logging in? GET HELP
          </Typography>

          <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
            <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
            {' • '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default ForgetPassword;
