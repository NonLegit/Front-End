import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
  AuthenticationBG, AuthenticationBody, FirstPartyContainer,
  StyledLink, RedditTextField, RedditLoadingButton,
} from '../../styles';
import AuthenticationHeader from '../../AuthenticationHeader/AuthenticationHeader';
import Divider from '../../Divider/Divider';

import {
  checkEmail, signUpEmail,
} from '../../scripts';
import ThirdParty from '../../../ThirdParty/ThirdParty';

function SignUpEmail({ setUserNamePage, email, setEmail }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('rerender');
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

  return (
    <>
      <AuthenticationBG />
      <AuthenticationBody mnwidth="280px" mxwidth="280px">
        <AuthenticationHeader reddit={false} title="Sign up" caption={caption} />

        <ThirdParty />

        <Divider />

        <FirstPartyContainer width="280px" onSubmit={(event) => signUpEmail(event, email, setEmail, setUserNamePage, setLoading)} noValidate>
          <RedditTextField
            label="Email"
            variant="filled"
            required
            InputProps={{
              endAdornment: (
                email.icon
              ),
              disableUnderline: true,
            }}
            clr={email.color}
            onBlur={() => checkEmail(email, setEmail)}
            onChange={(e) => setEmail((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }))}
            helperText={email.error}
          />
          <RedditLoadingButton type="submit" loading={loading}>
            continue
          </RedditLoadingButton>
        </FirstPartyContainer>

        <Typography paragraph fontSize={12}>
          Already a redditor?
          {' '}
          <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
        </Typography>
      </AuthenticationBody>
    </>
  );
}
export default SignUpEmail;
