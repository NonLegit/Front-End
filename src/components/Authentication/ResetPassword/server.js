// services
import DoneIcon from '@mui/icons-material/Done';
import axios from '../../../services/instance';

// mui components

// scripts
import { redditCookie,matchPassword } from '../scripts';
import { redirectHome } from '../../../scripts';

/**
*
* Function to check if length of provided string 3-20 accordingly change color and mesaages of username input field
* @param {string} username  -username to check on
* @returns void
*/
export const resetPassword = (setLoading, password, repassword, token, setbuttonText, setRedirectCaption, setCookies,setRePassword) => {
  setLoading(true);
  if (password.error != null || repassword.error != null) {
    setLoading(false);
    return;
  }
  // check if Empty (case he didn't make any change in the input field)
  if (password.input === '' || repassword.input === '') {
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
    if (response.status === 200) {
      setTimeout(() => {
        setbuttonText(<DoneIcon />);
        setRedirectCaption(true);
        redditCookie(setCookies);
        redirectHome(1000);
      }, 500);
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      // =>Handle Rest Reponses
      // =>mismatch between passwords
      // =>invalid token
      matchPassword(password, repassword, setRePassword);
    }
    // invalid Token
    setLoading(false);
    console.log(error);
  });
};
