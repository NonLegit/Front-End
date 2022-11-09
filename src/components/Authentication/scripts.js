import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import { wrongIcon, rightIcon } from './styles';
import theme from '../../styles/theme';

export const checkEmail = (email, setEmail) => {
  if (!/\S+@\S+\.\S+/.test(email.input)) {
    setEmail((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Please fix your email to continue',
    }));
  } else {
    setEmail((prevState) => ({
      ...prevState,
      color: theme.palette.primary.main,
      icon: rightIcon,
      error: null,
    }));
  }
  console.log('Email', email);
};

export const signUpEmail = (event, email, setEmail, setUserNamePage, setLoading) => {
  setLoading(true);
  event.preventDefault();
  checkEmail(email.input, setEmail);
  if (email.error !== null) { return; }

  if (email.input === '') {
    // Empty Field
    setEmail((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Please enter your email to continue',
    }));
    return;
  }

  setLoading(false);
  setUserNamePage(true);
  console.log(email);
};

export const refreshUsernames = (setUserNames) => {
  axios.get('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/username/random').then((response) => {
    setUserNames(response.data.usernames);
  });
  console.log('pressed');
};

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
  });
};

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

export const signUp = (
  setLoading,
  userName,
  setUserName,
  password,
  setPassword,
  email,
  verified,
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
    console.log(response);
    if (response.status === 201) {
      // Suceess
      window.location.href = './';
      console.log('Sign up');
    } else {
      console.log('Error');
    }
    setLoading(false);
  });
};

// Login
export const checkUserNameLogin = (userName, setUserName) => {
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

// Note Aasync for debugging timeout
export const logIn = async (
  event,
  userName,
  setUserName,
  password,
  setPassword,
  setLoading,
  setButtonText,
  setRedirectCaption,
) => {
  event.preventDefault();
  console.log(password);

  console.log(userName);
  // Verify UserName and Password API
  setLoading(true);
  checkUserNameLogin(userName, setUserName);
  if (userName.error != null) {
    console.log(userName, password);
    console.log("Couldn't login");
    setLoading(false);
  }

  axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/user/login/1', userName, password).then((response) => {
    console.log(response);
    setLoading(false);
    if (response.status === 200) {
      // Suceess;
      setButtonText(<DoneIcon />);
      setRedirectCaption(true);
      setTimeout(() => {
        // Add to the local stroage
        localStorage.setItem('Reddit_user', JSON.stringify({ userName, password }));
        window.location.href = '/';
      }, 1000);
      console.log('login up');
    } else if (response.status === 404) {
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
    } else {
      alert(response.data.message);
    }
  });
};
