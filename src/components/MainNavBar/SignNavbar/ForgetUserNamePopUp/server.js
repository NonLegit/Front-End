// mui components
import DoneIcon from '@mui/icons-material/Done';

// services
import axios from '../../../../services/instance';

/**
 *
 * recover Username
 * @returns {void}
 */
export const recoverUsername = (
  setLoading,
  email,
  verified,
  setDisabled,
  setbuttonText,
  setRedirectCaption,
) => {
  // console.log(email);
  setLoading(true);

  // if there is a problem with email
  if (email.error != null) {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return;
  }

  // not verified
  if (!verified) {
    setLoading(false);
    return;
  }

  // Accepted Call API
  axios.post('/users/forgot_username', { email: email.input }).then((response) => {
    // console.log(response);
    if (response.status === 204 || response.status === 201 || response.status === 200) {
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
      // email not found in DB [Don't Give the user This info]
      setTimeout(() => {
        setLoading(false);
        setDisabled(true);
        setbuttonText(<DoneIcon />);
        setRedirectCaption(true);
      }, 1000);
    } else {
      // 400 empty username or password[Won't reach this case]
    }
  });
};
