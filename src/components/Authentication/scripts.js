import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import { wrongIcon, rightIcon } from './styles';
import theme from '../../styles/theme';

/**
 * Fill array with 5 new random usernames
 * @param {function} setUserNames
 * @returns {void}
 *
 */
export const refreshUsernames = (setUserNames) => {
  axios.get('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/username/random').then((response) => {
    // ==>This API isn't in the documentation check with the back
    setUserNames(response.data.usernames);
  }).catch((error) => {
    console.log(error);
  });
};

/**
 *
 * check if username length [3-20], if valid username syntax,if username is unique and change state object accordingly
 * @param {string} username  --username to check for
 * @param {sstFunction} setUserName --setFunction for the userName State
 * @returns {void}
 */
export const checkUserName = (username, setUserName) => {
  // console.log(username);// New value must be passsed
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

  // Check Invalid UserName
  if (!/^[A-Za-z0-9_-]*$/.test(username)) {
    // console.log('invalid');
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Letters, numbers, dashes, and underscores only. Please try again without symbols.',
    }));
    // eslint-disable-next-line no-useless-return
    return;
  }

  // Check Unique Username
  const x = username === 'basma' ? 3 : 4;
  // ==>chek with back this Endpoint
  axios.get(`https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/username_available/${x}?userName=${username}`).then((response) => {
    if (response.status === 200) {
      if (response.data.available === false) {
        // Unique
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.primary.main,
          icon: rightIcon,
          error: null,
        }));
      } else {
        // Reapeated
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: 'That username is already taken.',
        }));
      }
    }
  }).catch((error) => {
    console.log(error);
  });
};

/**
 * check for Password Length more than 7 or not and change state of object atrributes accordingly
 *
 * @param {string} passwordInput --password to check on
 * @param {setFunction} setPassword --setFunction for the password State
 * @param {*} password --password object [undefined if not want to be used]
 * @returns {void}
 */
export const checkPassword = (passwordInput, setPassword, password) => {
  // console.log(passwordInput);
  // console.log(password);// old value so New value must be passsed
  // Check password more than 7
  if (passwordInput === '' || passwordInput.length < 8) {
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Password must be at least 8 characters long',
    }));
    return;
  }
  // if Password is set to unaccepatble keep this
  if (password !== undefined && password.error === 'This Password isn\'t acceptable' && password.score < 2) {
    // still unchanged so keep
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
 *
 * SignUp new User Function  if there is no a problem with the fields and verification the API is called
 * else not
 * Check for the Password Strength
 * Check if Verified to continue SignUp
 * @param {object} email --email object to signup with
 * @param {object} userName --userName object to signup with
 * @param {object} password --password object to signup with
 * @param {setFunction} setPassword --setfunction for the password
 * @param {state} verified --bool if verified by the Captcha
 * @param {setfunction} setLoading -setfunction for the Laoding state of the button
 * @param {setfunction} setButtonText -setfunction for the Button Text
 * @param {setfunction} setDisabled -setfunction for the setting Button Disabled or Enabled
 * @param {setfunction} setRedirectCaption -setfunction for the Caption in SignUp Page
 * @returns {void}
 */
export const signUp = (
  email,
  userName,
  password,
  setPassword,
  verified,
  setLoading,
  setButtonText,
  setDisabled,
  setRedirectCaption,
) => {
  // console.log(email);
  // console.log(userName);// true value but case no change wrong value
  // console.log(password);// true value but case no change wrong value
  setLoading(true);

  // check if there is any errors
  if (userName.error != null || password.error != null) {
    setLoading(false);
    return;
  }

  // check if Empty (case he didn't make any change in the input field)
  if (userName.input === '' || password.input === '') {
    setLoading(false);
    return;
  }

  // Weak Password
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

  // check if verified
  if (!verified) {
    setLoading(false);
    return;
  }
  // SignUpEndPoint
  axios.post('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/user/signup/1', {
  // console.log(userName.input, password.input, email.input);
    userName: userName.input,
    email: email.input,
    password: password.input,
  }).then((response) => {
    setLoading(false);
    if (response.status === 201) {
      setButtonText(<DoneIcon />);
      setDisabled(true);
      setRedirectCaption(true);
      setTimeout(() => {
        // Suceess
        window.location.href = './';
      }, 1000);
    } else {
      console.log('Error');
    }
  }).catch((error) => console.log(error));
};

/**
 * Check for Passwords matched or not
 * @param {state} password
 * @param {function} setPassword
 * @returns {void}
 */
export const matchPassword = (passwordOne, passwordTwoInput, setPasswordTwo) => {
  if (passwordOne.input !== passwordTwoInput) {
    // console.log('Mismatch problem');
    setPasswordTwo((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Password must match',
    }));
    return;
  }

  // Accepeted
  setPasswordTwo((prevState) => ({
    ...prevState,
    color: theme.palette.primary.main,
    icon: rightIcon,
    error: null,
  }));
};
