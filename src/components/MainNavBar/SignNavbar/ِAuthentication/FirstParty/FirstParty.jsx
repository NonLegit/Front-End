import { useState } from 'react';
import { useCookies } from 'react-cookie';

// mui components
import { Typography } from '@mui/material';

// styles
import { FirstPartyContainer } from './styles';
import { RedditLoadingButton, RedditTextField } from '../styles';
import theme, { fonts } from '../../../../../styles/theme';

// servers
import { checkUserName, logIn } from '../../../../Authentication/FirstParty/server';

/**
 * Form for Logging in by username and passsword
 *
 * @component
 * @returns {React.Component} First Party Form
 */
function FirstParty() {
  // useState
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [buttonTxt, setButtonText] = useState('Log In');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);

  // useCookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);
  return (

    <FirstPartyContainer width="290px" onSubmit={(e) => { logIn(e, setLoading, userName, password, setPassword, setButtonText, setDisabled, setRedirectCaption, setCookies, setUserName); }}>

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
          checkUserName(e.target.value.trim(), setUserName);
        }}
        helperText={userName.error}
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
        clr={password.color}
        onChange={(e) => setPassword((prevState) => ({
          ...prevState,
          input: e.target.value.trim(),
        }))}
      />

      <RedditLoadingButton type="submit" loading={loading} disabled={disabled}>
        {buttonTxt}
      </RedditLoadingButton>

      {redirectCaption
        ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="10px 0px">You are now logged in. You will soon be redirected</Typography>
        : null}
    </FirstPartyContainer>

  );
}

export default FirstParty;
