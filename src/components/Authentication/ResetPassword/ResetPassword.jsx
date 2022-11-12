import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Checkbox } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

import {
  AuthenticationBody, FirstPartyContainer, StyledLink, RedditTextField, RedditLoadingButton,
} from '../styles';

import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import { CheckBoxConatiner } from './styles';

import theme, { fonts } from '../../../styles/theme';
import { checkPassword, matchPassword } from '../scripts';

function ResetPassword() {
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [repassword, setRePassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  // const [Logout, setLogOut] = useState(false);
  const [buttonText, setbuttonText] = useState('set Password');
  const [loading, setLoading] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);

  useEffect(() => {
  }, []);

  const caption = (
    <>
      Choose a new password here, then log in to your account.
    </>
  );

  const resetPassword = () => {
    setLoading(true);
    console.log('ResetPassword');
    setLoading(true);
    if (password.error != null || repassword.error != null) {
      setLoading(false);
      return;
    }
    // Check API with BE
    axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/reset_password/200').then((response) => {
      if (response.status === 200) {
        setTimeout(() => {
          setbuttonText(<DoneIcon />);
          setRedirectCaption(true);
          setTimeout(() => {
            window.location.href = './';
          }, 500);
        }, 1000);
      }
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    });
  };
  return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px">
      <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
      <FirstPartyContainer>
        <RedditTextField
          label="New Password"
          variant="filled"
          required
          value={password.input}
          InputProps={{
            endAdornment: (
              password.icon
            ),
            disableUnderline: true,
          }}
          clr={password.color}
          onChange={(e) => {
            checkPassword(e.target.value.trim(), setPassword, undefined);
            setPassword((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }));
          }}
          helperText={password.error}
        />
        <RedditTextField
          label="Verify Password"
          variant="filled"
          required
          value={repassword.input}
          InputProps={{
            endAdornment: (
              repassword.icon
            ),
            disableUnderline: true,
          }}
          clr={repassword.color}
          onChange={(e) => {
            matchPassword(password, e.target.value.trim(), setRePassword);
            setRePassword((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }));
          }}
          helperText={repassword.error}
        />
        <CheckBoxConatiner>
          <Checkbox sx={{ padding: '0px 5px 0px 0px' }} />
          <Typography fontSize="12px" fontWeight="400">
            Changing your password logs you out of all browsers on your device(s).
            {' '}
            Checking this box also logs you out of all apps you have authorized.
          </Typography>
        </CheckBoxConatiner>
        <RedditLoadingButton type="submit" width="155px" loading={loading} onClick={resetPassword}>
          {buttonText}
        </RedditLoadingButton>
        {redirectCaption
          ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Typography>
          : null}
      </FirstPartyContainer>
      <Typography paragraph fontSize="12px" marginTop="10px" color="#3394DC">
        <StyledLink href="/login" fontWeight="600" capital="uppercase">log in</StyledLink>
        {' • '}
        <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
      </Typography>
    </AuthenticationBody>
  );
}

export default ResetPassword;
