// mui components
import DoneIcon from '@mui/icons-material/Done';

// services
import axios from '../../../services/instance';

// styles
import { wrongIcon, rightIcon } from '../styles';

import theme from '../../../styles/theme';

// scripts
import { redditCookie } from '../scripts';
// scripts
import { redirectHome } from '../../../utils/Redirect';

/**
*
* Function to check if length of provided string 3-20 accordingly change color and mesaages of username input field
* @param {string} username  -username to check on
* @returns void
*/
export const checkUserName = (username, setUserName) => {
  // console.log(userName); // late
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
export const logIn = (
  event,
  setLoading,
  userName,
  password,
  setPassword,
  setButtonText,
  setDisabled,
  setRedirectCaption,
  setCookies,
  setUserName,
  popUp = false,
  handleClose = null,
) => {
  event.preventDefault();
  // console.log(userName);// Not Late
  // console.log(password);// Not Late

  // Add cookie to localStorage
  setLoading(true);
  if (userName.error != null && userName.error !== 'Incorrect username or password') {
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

  setUserName((prevState) => ({
    ...prevState,
    color: theme.palette.neutral.main,
    icon: null,
    error: null,
  }));

  // API Call
  console.log(userName.input);
  axios.post('/users/login', {
    userName: userName.input, password: password.input,
  }).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      setLoading(false);
      setButtonText(<DoneIcon />);
      setDisabled(true);
      setRedirectCaption(true);
      // Add Reddit Cookie
      redditCookie(setCookies);
      if (popUp === false) { redirectHome(1000); } else {
        // PopUp window
        setTimeout(() => {
          handleClose();
        }, 1000);
      }
    }
  }).catch((error) => {
    setLoading(false);
    console.log(error);
    if (error.response.status === 404 || error.response.status === 400) {
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
    } else {
      console.log(error.response.data.errorMessage);
    }
  });
};
