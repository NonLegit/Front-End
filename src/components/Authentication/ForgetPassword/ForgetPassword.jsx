import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

// mui components
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

// componnets
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';

// services
import axios from '../../../services/instance';

// styles
import {
  AuthenticationBody, FirstPartyContainer, StyledLink, RedditTextField,
  wrongIcon, rightIcon, RedditLoadingButton,
} from '../styles';
import theme, { fonts } from '../../../styles/theme';

// scripts
import { redditCookie } from '../scripts';

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

  // cookies
  const [cookies, setCookies] = useCookies(['redditUser']);

  useEffect(() => {
    // check if already logged in Cokkies
    if (Cookies.get('jwt')) {
      // Redirect to loading page
      // check on Reddit cookie
      if (cookies.redditUser === undefined) {
        redditCookie(setCookies);
      }
      setremeberMe(true);
    } else {
      setremeberMe(false);
    }
  }, []);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  const checkUserName = (username, error) => {
    // console.log(username); //must be passed expilicity
    // console.log('Check User');
    // console.log(error); //must be passed expilicity
    if (error === "That user doesn't exist") {
      // wait for Data Base
      return;
    }
    // Check Username bwteen 3-20 characters
    if (username.length < 3 || username.length > 20) {
      // console.log('length problem');
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
    // console.log(userName); //correct
    setLoading(true);
    // Setting error in case of first time
    checkEmail(email.input);
    checkUserName(userName.input, userName.error);

    // Case he didn't enter anything
    if (email.input === '' || userName.input === '') {
      setLoading(false);
      return;
    }

    // There are some errors in the email or username
    if (userName.error !== "That user doesn't exist" && (email.error != null || userName.error != null)) {
      setLoading(false);
      return;
    }

    axios.post('/users/forgot_password', { email: email.input, userName: userName.input }).then((response) => {
      if (response.status === 204) {
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.primary.main,
          icon: rightIcon,
          error: null,
        }));
        setTimeout(() => {
          setLoading(false);
          setDisabled(true);
          setbuttonText(<DoneIcon />);
          setRedirectCaption(true);
        }, 1000);
      }
    }).catch((error) => {
      setLoading(false);
      console.log(error);
      if (error.response.status === 404) {
        // This user Doesn't exist
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: 'That user doesn\'t exist',
        }));
        console.log(error.response.errorMessage);
      }
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
                checkUserName(e.target.value.trim(), userName.error);
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
