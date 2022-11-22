import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

// mui compocnents
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

// componenents
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';
import Email from '../Email/Email';

// services
import axios from '../../../services/instance';

// styles
import { AuthenticationBody, StyledLink } from '../styles';
import theme, { fonts } from '../../../styles/theme';

// scripts
import { redditCookie } from '../scripts';

/**
 * Component for Forget Username Page
 *
 * @component
 * @returns {React.Component} --Forget Username page
 */

function ForgetUsername() {
  // states
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [remeberMe, setremeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonText, setbuttonText] = useState('Email Me');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);

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
      Tell us the email address associated with your Reddit account, and we’ll
      send you an email with your username.
    </>
  );

  const recoverUsername = () => {
    console.log(email);
    setLoading(true);

    // if there is a problem with email
    if (email.error != null) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      return;
    }

    // not verified
    if (!verified) {
      setLoading(false);
      return;
    }

    // Accepted Call API
    axios.post('/users/forgot_username', { email: email.input }).then((response) => {
      // console.log(response);
      if (response.status === 204) {
        // => check with Back this repsonse is empty
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
      if (error.response.status === 400) {
        // email not found in DB
        console.log(error.response.errorMessage);
      }
    });
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="forgetusername-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Recover your username" caption={caption} fontSize="14px" />
          <Email email={email} setEmail={setEmail} onSubmitFn={recoverUsername} loading={loading} buttonText={buttonText} btnWidth="155px" fieldText="Email Address" recaptcha setVerified={setVerified} disabled={disabled} />

          {redirectCaption
            ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px" data-testid="forgetusername-redirect-caption-test">Thanks! If there ara any Reddit accounts associated with that email address, you’ll get an email with your usernames(s) shortly</Typography>
            : null}
          <Typography paragraph fontSize="12px" margin="0px 0px 10px 0px">
            Don
            {'\''}
            t have an email or need assistance logging in? GET HELP
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

export default ForgetUsername;
