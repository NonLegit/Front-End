import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import { wrongIcon, rightIcon } from './styles';
import theme from '../../styles/theme';

/**
 * Fill array with 5 new random usernames
 * @param {statefunction} setUserNames
 */
export const refreshUsernames = (setUserNames) => {
  axios.get('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/username/random').then((response) => {
    setUserNames(response.data.usernames);
  }).catch((error) => {
    console.log(error);
  });
};

/**
 * checks for length of the username, Format,unique
 * @param {state} userName
 * @param {statefunction} setUserName
 */
export const checkUserName = (userName, setUserName) => {
  const username = userName.input;
  console.log(username);
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

  // Check Invalid UserName
  if (!/^[A-Za-z0-9_-]*$/.test(username)) {
    console.log('invalid');
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Letters, numbers, dashes, and underscores only. Please try again without symbols.',
    }));
    return;
  }

  // Check Unique Username
  axios.get('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/user/unique/1').then((response) => {
    console.log(response.data);
    if (response.data.status === false) {
      console.log('Reapeated');
      setUserName((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'That username is already taken.',
      }));
      return;
    }
    // Valid UserName
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.primary.main,
      icon: rightIcon,
      error: null,
    }));
  }).catch((error) => console.log(error));
};

/**
 * Check for password length if so then set as accepted
 * @param {state} password
 * @param {statefunction} setPassword
 * @returns
 */
export const checkPassword = (password, setPassword) => {
  const passwordInput = password.input;
  console.log(passwordInput);
  // Check Username bwteen 3-20 characters
  if (passwordInput.length < 8) {
    console.log('length problem');
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Password must be at least 8 characters long',
    }));
    return;
  }

  // Accepeted
  setPassword((prevState) => ({
    ...prevState,
    color: theme.palette.primary.main,
    icon: rightIcon,
    error: null,
  }));
};

/**
 * Check if we can SignUp or not if there is no probelm in username and password, call the endpoint
 * @param {statefunction} setLoading
 * @param {state} userName
 * @param {statefunction} setUserName
 * @param {state} password
 * @param {statefunction} setPassword
 * @param {state} email
 * @param {state} verified
 * @returns
 */
export const signUp = (
  setLoading,
  userName,
  setUserName,
  password,
  setPassword,
  email,
  verified,
  setButtonText,
  setRedirectCaption,
) => {
  setLoading(true);
  checkUserName(userName, setUserName);
  checkPassword(password, setPassword);

  if (userName.error != null || password.error != null) {
    console.log(userName, password);
    console.log("Couldn't signup");
    setLoading(false);
    return;
  }
  if (!verified) {
    setLoading(false);
    return;
  }
  if (password.score < 2) {
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'This Password isn\'t acceptable',
    }));
    setLoading(false);
    return;
  }
  axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/user/signup/1', userName, password, email).then((response) => {
    setLoading(false);
    if (response.status === 201) {
      setButtonText(<DoneIcon />);
      setRedirectCaption(true);
      setTimeout(() => {
        // Suceess
        window.location.href = './';
        console.log('Sign up');
      }, 1000);
    } else {
      console.log('Error');
    }
  }).catch((error) => console.log(error));
};
