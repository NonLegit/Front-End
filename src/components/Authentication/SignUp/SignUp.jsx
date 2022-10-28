import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
  AuthenticationBG, AuthenticationConatiner, AuthenticationBody,
  AuthenticationInput, AuthenticationButton, FirstPartyContainer, StyledLink,
} from '../AuthenticationConatiners/styles';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import { ThirdPartyContainer } from '../ThirdPartyButton/styles';
import ThirdPartyButton from '../ThirdPartyButton/ThirdPartyButton';
import Divider from '../Divider/Divider';

import LoadingPage from '../LoadingPage/LoadingPage';
import SignUpUsername from './SignUpUsername';

import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';

function SignUp() {
  const [usernamePage, setUsernamePage] = useState(false);
  const [remeberMe, setremeberMe] = useState(false);

  useEffect(() => {
    setUsernamePage(false);
    if (false) {
      setremeberMe(true);
    }
  }, []);

  const caption = (
    <>
      By continuing, you are setting up a Reddit account and agree to our
      {' '}
      <StyledLink fontWeight="400" href="https://www.redditinc.com/policies/user-agreement" capital="none">User Agreement</StyledLink>
      {' '}
      and
      {' '}
      <StyledLink fontWeight="400" href="https://www.reddit.com/policies/privacy-policy" capital="none">Privacy Policy </StyledLink>
      .
    </>
  );

  const signUp = () => {
    console.log('signUp');
  };
  return (
    <AuthenticationConatiner>
      {usernamePage ? <SignUpUsername setUsernamePage={setUsernamePage} /> : (
        <>
          <AuthenticationBG />
          <AuthenticationBody mnwidth="280px" mxwidth={remeberMe ? '440px' : '280px'}>
            {remeberMe ? <LoadingPage /> : (
              <>
                <AuthenticationHeader reddit={false} title="Sign up" caption={caption} />
                <ThirdPartyContainer>
                  <ThirdPartyButton img={Google} alt="Google" txt="continue with google" />
                  <ThirdPartyButton img={Facebook} alt="Facebook" txt="continue with facebook" />
                </ThirdPartyContainer>

                <Divider />

                <FirstPartyContainer width="280px" onSubmit={signUp}>
                  <AuthenticationInput label="EMAIL" variant="outlined" />
                  <AuthenticationButton type="submit">continue</AuthenticationButton>

                </FirstPartyContainer>
                <Typography paragraph fontSize={12}>
                  Already a redditor?
                  {' '}
                  <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
                </Typography>
              </>
            )}
          </AuthenticationBody>
        </>
      )}
    </AuthenticationConatiner>

  );
}

export default SignUp;
