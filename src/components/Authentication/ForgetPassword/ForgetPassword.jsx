import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
// mui components
import { Typography } from '@mui/material';

// componnets
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';

// styles
import {
  AuthenticationBody, FirstPartyContainer, StyledLink, RedditTextField,
  RedditLoadingButton,
} from '../styles';
import theme, { fonts } from '../../../styles/theme';

// server
import { checkUserName, recoverPassword } from './ForgetPasswordServer';

// scripts
import { redditCookie, checkEmail } from '../authenticationServer';

// environment variables
const { REACT_APP_ENV } = process.env;

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

  // useEffect
  useEffect(() => {
    // Check on Cookies
    // developememt
    if (REACT_APP_ENV === 'development') {
      if (cookies.redditUser === undefined) {
        setremeberMe(false);
      } else { setremeberMe(true); }
    } else if (Cookies.get('jwt')) {
      // production
      // Update Cookie
      redditCookie(setCookies);
      // check on Reddit cookie
      // if (cookies.redditUser === undefined) {
      //   redditCookie(setCookies);
      // }
      // Redirect to loading page
      setremeberMe(true);
    } else {
      // No Cookie by Back End
      setremeberMe(false);
    }
  }, []);

  const caption = (
    <>
      Tell us the username and email address associated with
      your Reddit account, and we’ll send you an email with a link to reset your password.
    </>
  );

  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="forgetpassword-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
          <FirstPartyContainer
            noValidate
            onSubmit={(e) => {
              e.preventDefault(); recoverPassword(
                setLoading,
                email,
                setEmail,
                userName,
                setUserName,
                setDisabled,
                setbuttonText,
                setRedirectCaption,
              );
            }}
          >
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
                checkUserName(e.target.value.trim(), userName.error, setUserName);
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
                checkEmail(e.target.value.trim(), setEmail);
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
