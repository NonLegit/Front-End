import { useState } from 'react';
import axios from 'axios';

// mui components
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

// styles
import { FirstPartyContainer } from './styles';
import {
  RedditLoadingButton, RedditTextField, wrongIcon, rightIcon,
} from '../styles';
import theme, { fonts } from '../../../styles/theme';

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
  const [redirectCaption, setRedirectCaption] = useState(false);

  /**
   *
   * Function to check if length of provided string 3-20 accordingly change color and mesaages of username input field
   * @param {string} username  -username to check on
   * @returns void
   */
  const checkUserName = (username) => {
    console.log(userName); // late
    // Check Username bwteen 3-20 characters
    if (username.length < 3 || username.length > 20) {
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
   * Function Calls /users/login endpoint to Redirect to Home Page or Invalid so Error Messages Appear
   * @param {event} event -Onsubmit of the form
   * @returns void
   */
  const logIn = (event) => {
    event.preventDefault();
    console.log(userName);// Not Late
    setLoading(true);
    if (userName.error != null) {
      setLoading(false);
      return;
    }

    // Case of previous trial was error
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.neutral.main,
      icon: null,
      error: null,
    }));

    // API Call
    const x = userName.input === 'basma' ? 3 : 1;
    axios.post(`https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/login/${x}`, { userName: userName.input, password: password.input }).then((response) => {
      if (response.status === 200) {
        setLoading(false);
        // sucess
        // ==>response.data.token
        // ==>response.data.expiresin
        // ==>Cokies Point
        setButtonText(<DoneIcon />);
        setRedirectCaption(true);
        setTimeout(() => {
          // window.location.href = '/';
        }, 1000);
      }
    }).catch((error) => {
      setLoading(false);
      console.log(error);
      if (error.response.status === 404) {
        // Invlaid Username or password
        // update username and password states
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
      } else if (error.response.status === 400) {
        // Provide username or password
        // ==> errorMessage [Check with BE]
        console.log('status 400 is returned');
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
        onChange={(e) => {
          setUserName((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkUserName(e.target.value.trim());
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
        onChange={(e) => setPassword((prevState) => ({
          ...prevState,
          input: e.target.value.trim(),
        }))}
        data-testid="Password-FirstParty-test"
      />

      <RedditLoadingButton type="submit" loading={loading} data-testid="login-btn-test">
        {buttonTxt}
      </RedditLoadingButton>

      {redirectCaption
        ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="10px 0px">You are now logged in. You will soon be redirected</Typography>
        : null}
    </FirstPartyContainer>

  );
}

export default FirstParty;
