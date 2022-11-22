// services
import DoneIcon from '@mui/icons-material/Done';
import axios from '../../../services/instance';

// styles
import { wrongIcon } from '../styles';
import theme from '../../../styles/theme';

// scripts
// eslint-disable-next-line no-unused-vars
import { redditCookie, matchPassword } from '../scripts';
import { redirectLogin } from '../../../utils/Redirect';

/**
*
* Function to check if length of provided string 3-20 accordingly change color and mesaages of username input field
* @param {string} username  -username to check on
* @returns void
*/
// eslint-disable-next-line no-unused-vars
export const resetPassword = (setLoading, password, setPassword, repassword, token, setbuttonText, setRedirectCaption, setCookies, setRePassword, setExpiredToken) => {
  console.log('Basdsdf');
  setExpiredToken(false);
  setLoading(true);
  if (password.error !== 'Weak Password must contain Capital letter and numbers' && (password.error != null || repassword.error != null)) {
    setLoading(false);
    return;
  }
  // check if Empty (case he didn't make any change in the input field)
  if (password.input === '' || repassword.input === '') {
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Password must be at least 8 characters long',
    }));
    setLoading(false);
    return;
  }
  // Check API with BE
  axios.post(`/users/reset_password/${token}`, {
    // =>Logout paramter ??
    password: password.input,
    confirmPassword: repassword.input,
  }).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      setTimeout(() => {
        setbuttonText(<DoneIcon />);
        setRedirectCaption(true);
        redirectLogin(1000);
      }, 500);
    }
  }).catch((error) => {
    if (error.response.status === 401) {
      // expired token
      setExpiredToken(true);
    } else if (error.response.status === 400) {
      if (error.response.data.errorType === 2) {
        setPassword((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: 'Weak Password must contain Capital letter and numbers',
        }));
      }
      // Non matching passwords(1)
      // not provide(0)
      // matchPassword(password, repassword, setRePassword);
    }
    setLoading(false);
    console.log(error);
  });
};
