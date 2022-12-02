// mui components
import DoneIcon from '@mui/icons-material/Done';

// services
import axios from '../../../../services/instance';

// styles
import { wrongIcon, rightIcon } from '../../../Authentication/styles';
import theme from '../../../../styles/theme';

// scripts
import { checkEmail } from '../../../Authentication/authenticationServer';

/**
 *
 * @param {string} username --userName Object
 * @param {string} error --error Message
 * @param {setfunction}setUserName --setfunction for the userName
 * @returns {void}
 */
export const checkUserName = (username, error, setUserName) => {
  // console.log(username); //must be passed expilicity
  // console.log('Check User');
  // console.log(error); //must be passed expilicity
  if (error === "That user doesn't exist") {
    // wait for Data Base
    return;
  }
  // Check Username bwteen 3-20 characters
  if (username.length < 3 || username.length > 20) {
    // console.log('length problem');
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
 * Recover Email
 * @param {setfunction} setLoading
 * @param {object} email --email object to recoverPassword with
 * @param {object} userName --userName object to recoverPassword with
 * @param {setFunction} setUserName --setfunction for the userName
 * @param {setFunction} setDisabled --setfunction for the setting Button Disabled or Enabled
 * @param {setFunction} setbuttonText --setfunction for the Button Text
 * @param {setFunction} setRedirectCaption --setfunction for the Caption in SignUp Page
 * @returns {void}
 */
export const recoverPassword = (
  setLoading,
  email,
  setEmail,
  userName,
  setUserName,
  setDisabled,
  setbuttonText,
  setRedirectCaption,
) => {
  // console.log(userName); //correct
  setLoading(true);
  // Setting error in case of first time
  checkEmail(email.input, setEmail);
  checkUserName(userName.input, userName.error, setUserName);

  // Case he didn't enter anything
  if (email.input === '' || userName.input === '') {
    setLoading(false);
    return;
  }

  // There are some errors in the email or username
  if (userName.error !== "That user doesn't exist" && (email.error != null || userName.error != null)) {
    setLoading(false);
    return;
  }

  axios.post('/users/forgot_password', { email: email.input, userName: userName.input }).then((response) => {
    if (response.status === 204 || response.status === 201 || response.status === 200) {
      setUserName((prevState) => ({
        ...prevState,
        color: theme.palette.primary.main,
        icon: rightIcon,
        error: null,
      }));
      setTimeout(() => {
        setLoading(false);
        setDisabled(true);
        setbuttonText(<DoneIcon />);
        setRedirectCaption(true);
      }, 1000);
    }
  }).catch((error) => {
    setLoading(false);
    console.log(error);
    if (error.response?.status === 404) {
      // This user Doesn't exist
      setUserName((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'That user doesn\'t exist',
      }));
      console.log(error.response?.errorMessage);
    }
    // 400 provode username and Password[Isn't reached]
  });
};
