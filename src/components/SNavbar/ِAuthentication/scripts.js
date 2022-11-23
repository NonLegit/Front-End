// services
import axios from '../../services/instance';

// styles
import { wrongIcon, rightIcon } from './styles';
import theme from '../../styles/theme';

// scripts
import { redirectLogin } from '../../utils/Redirect';

// utils
import { EmailFormat } from '../../utils/checkEmail';
/**
 *
 * Add Reddit Cookie
 * Must be Authorized user
 * @returns {void}
 */
export const redditCookie = (setCookie) => {
  axios.get('/users/me/').then((response) => {
    if (response.status === 200) {
    // set cookie
      const date = new Date();
      date.setDate(date.getDate() + 90);
      setCookie('redditUser', response.data.user, { path: '/', expires: date });
    }
    // unauthorized =>Redirect to login page
  }).catch(() => redirectLogin(20));
};

/**
 * Fill array with 5 new random usernames
 * @param {function} setUserNames
 * @returns {void}
 *
 */
export const refreshUsernames = (setUserNames) => {
  setUserNames(['Basma', 'Eslam', 'Ali', 'Youssef', 'Aya']);
  // NOT AN ENDPOIT:(
  // axios.get('https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/username/random').then((response) => {
  //   // ==>This API isn't in the documentation check with the back
  //   setUserNames(response.data.usernames);
  // }).catch((error) => {
  //   console.log(error);
  // });
};

/**
 *
 * Check on Email Format
 * @param {Srting} emailInput  --email input string
 * @param {setfunction} setEmail  --setfunction for the Email Object
 * @returns {void}
 */
export const checkEmail = (emailInput, setEmail) => {
  if (emailInput === '') {
    setEmail((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Please enter an email address to continue',
    }));
  } else if (!EmailFormat(emailInput)) {
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
