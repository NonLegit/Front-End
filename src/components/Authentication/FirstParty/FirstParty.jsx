import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import { FirstPartyContainer } from './styles';
import theme, { fonts } from '../../../styles/theme';
import {
  RedditLoadingButton, RedditTextField, wrongIcon, rightIcon,
} from '../styles';

/**
 * Component for Logiing in by username and passsword
 *
 * @component
 * @returns {React.Component}
 */
function UserNamePasswordForm() {
  const [buttonTxt, setButtonText] = useState('Log In');
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonText('Log in');
  }, []);

  /**
   * Check if Valid username from length and format
   * @returns {null}
   */
  const checkUserName = () => {
    const username = userName.input;
    console.log(userName);

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
  /**
   *
   * @param {event} event
   * @returns Either logging in and redirecting to the homepage or Error flags on the inputfields
   */
  const logIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(password);
    console.log(userName);
    if (userName.error != null) {
      console.log("Couldn't login");
      setLoading(false);
      return;
    }
    axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/user/login/1', userName, password).then((response) => {
      console.log(response);
      setLoading(false);
      if (response.status === 200) {
        setButtonText(<DoneIcon />);
        setRedirectCaption(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
        console.log('login up');
      }
    }).catch((error) => {
      if (error.response.status === 404) {
        // Invlaid Username or password
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: 'Incorrect username or password',
        }));
        setPassword((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: null,
        }));
      }
    });
  };

  return (
    <FirstPartyContainer width="290px" onSubmit={logIn} data-testid="FirstParty-test">

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
        onBlur={() => checkUserName()}
        onChange={(e) => {
          setUserName((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkUserName();
        }}
        helperText={userName.error}
        data-testid="UserName-FirstParty-test"
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
        onBlur={(e) => setPassword((prevState) => ({
          ...prevState,
          input: e.target.value.trim(),
        }))}
        data-testid="Password-FirstParty-test"
      />

      <RedditLoadingButton type="submit" loading={loading} data-testid="login-btn-test" ispopup={false}>
        {buttonTxt}
      </RedditLoadingButton>

      {redirectCaption
        ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="10px 0px">You are now logged in. You will soon be redirected</Typography>
        : null}

    </FirstPartyContainer>
  );
}

export default UserNamePasswordForm;
