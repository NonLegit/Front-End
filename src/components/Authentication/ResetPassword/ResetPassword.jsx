import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// mui components
import { Typography } from '@mui/material';
// import { Checkbox } from '@mui/material';

// components
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';

// styles
import { CheckBoxConatiner } from './styles';
import theme, { fonts } from '../../../styles/theme';
import {
  AuthenticationBody, FirstPartyContainer, StyledLink, RedditTextField, RedditLoadingButton,
} from '../styles';

// server
import { resetPassword } from './server';

// scripts
import { checkPassword, matchPassword } from '../scripts';
/**
 * Component for Reset Password Page
 *
 * @component
 * @returns {React.Component} --ResetPassword Page Component
 */
function ResetPassword() {
  // states
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [repassword, setRePassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  // eslint-disable-next-line no-unused-vars
  // const [Logout, setLogOut] = useState(false);
  const [buttonText, setbuttonText] = useState('set Password');
  const [loading, setLoading] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [expiredToken, setExpiredToken] = useState(false);

  // useCookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  // useParams
  const { token } = useParams();

  const caption = (
    <>
      Choose a new password here, then log in to your account.
    </>
  ); return (
    <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="resetpassword-test">
      <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
      {/* <h1>{token}</h1> */}
      <FirstPartyContainer noValidate onSubmit={(e) => { e.preventDefault(); resetPassword(setLoading, password, setPassword, repassword, token, setbuttonText, setRedirectCaption, setCookies, setRePassword, setExpiredToken); }}>
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
            setPassword((prevState) => ({
              ...prevState,
              input: e.target.value.trim(),
            }));
            checkPassword(e.target.value.trim(), setPassword, undefined);
            matchPassword(repassword, e.target.value.trim(), setRePassword);
          }}
          helperText={password.error}
          data-testid="resetpassword-password-input"
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
          data-testid="resetpassword-repassword-input"
        />
        <CheckBoxConatiner>
          {/* <Checkbox sx={{ padding: '0px 5px 0px 0px' }} onChange={(event) => setLogOut(event.target.checked)} /> */}
          <Typography fontSize="12px" fontWeight="400">
            Changing your password logs you out of all browsers on your device(s).
            {/* {' '} */}
            {/* Checking this box also logs you out of all apps you have authorized. */}
          </Typography>
        </CheckBoxConatiner>
        <RedditLoadingButton type="submit" width="155px" loading={loading} data-testid="set-newpassword-btn-test">
          {buttonText}
        </RedditLoadingButton>
        {redirectCaption
          ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px">you’ve successfully changed your password.You can now log in using your new password</Typography>
          : null}
        {expiredToken
          ? <Typography color="error" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="0px 0px">Token has expired</Typography>
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
