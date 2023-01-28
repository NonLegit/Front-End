// import { removeRedditCookie } from '../../../../Authentication/authenticationServer';
import DoneIcon from '@mui/icons-material/Done';
import { removeRedditCookie } from '../../../../Authentication/authenticationServer';
import axios from '../../../../../services/instance';
// import { redirectLogin } from '../../../../utils/Redirect';

// styles
import { wrongIcon } from '../../../../Authentication/styles';
import theme from '../../../../../styles/theme';

// scripts
import { redirectLogin } from '../../../../../utils/Redirect';
/**
 * - function server to change password of user
 */
export const changePassword = (
  setLoading,
  oldPassword,
  setoldPassword,
  newPassword,
  setnewPassword,
  confirmNewPassword,
  setbuttonText,
  setRedirectCaption,
  removeCookie,
  keepLoggedIn,
) => {
  setLoading(true);
  if (newPassword.error !== 'Weak Password must contain Capital letter and numbers' && (oldPassword.error != null || newPassword.error != null || confirmNewPassword.error != null)) {
    setLoading(false);
    return;
  }

  // check if Empty (case he didn't make any change in the input field)
  if (oldPassword.input === '') {
    setoldPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'This Field is required',
    }));
    setLoading(false);
    return;
  }

  // check if Empty (case he didn't make any change in the input field)
  if (newPassword.input === '' || confirmNewPassword.input === '') {
    setnewPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Password must be at least 8 characters long',
    }));
    setLoading(false);
    return;
  }

  axios.post(
    '/users/change_password',
    {
      oldPassword: oldPassword?.input,
      newPassword: newPassword?.input,
      confirmNewPassword: confirmNewPassword?.input,
      keepLoggedIn,
    },
  ).then((response) => {
    console.log('users/change_password', response);
    if (response?.status === 200) {
      // remove Reddit Cookie
      console.log('Removed');
      removeRedditCookie(removeCookie);
      if (localStorage.getItem('RedditHistory')) {
        localStorage.removeItem('RedditHistory');
      }
      // Deteletd Sucessfully
      alert('Password Changed Sucessfully');
      setTimeout(() => {
        setbuttonText(<DoneIcon />);
        setRedirectCaption(true);
        redirectLogin(1000);
      }, 500);
    }
  }).catch((error) => {
    // 404
    console.log(error);
    alert(error?.response?.data?.errorMessage);
  });
};
