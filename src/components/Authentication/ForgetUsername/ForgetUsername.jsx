import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { AuthenticationBody, StyledLink } from '../styles';

import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import LoadingPage from '../LoadingPage/LoadingPage';
import Email from '../Email/Email';

import { fonts } from '../../../styles/theme';

/**
 * Component for Forget Username Page
 *
 * @component
 * @returns {React.Component}
 */

function ForgetUsername() {
  const [remeberMe, setremeberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [buttonText, setbuttonText] = useState('Email Me');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);

  useEffect(() => {
    // check if already logged in Cokkies
    setremeberMe(false);
    setLoading(false);
    setRedirectCaption(false);
    setbuttonText('Email Me');
  }, []);

  const caption = (
    <>
      Tell us the email address associated with your Reddit account, and we’ll
      send you an email with your username.
    </>
  );

  const recoverUsername = (email) => {
    setLoading(true);

    if (email.error != null) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      return;
    }
    if (!verified) {
      setLoading(false);
      return;
    }
    axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/forgot_username/204', { email: email.input }).then((response) => {
      console.log(response);
      if (response.status === 204) {
        setTimeout(() => {
          setLoading(false);
          setbuttonText(<DoneIcon />);
          setDisabled(true);
          setRedirectCaption(true);
        }, 1000);
      }
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="forgetusername-test">
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit title="Recover your username" caption={caption} fontSize="14px" />
          <Email onSubmitFn={recoverUsername} loading={loading} buttonText={buttonText} btnWidth="155px" fieldText="Email Address" recaptcha setVerified={setVerified} defaultEmail="" disabled={disabled} />

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
