// services
// import DoneIcon from '@mui/icons-material/Done';
import axios from '../../../../services/instance';
import { redirectHome } from '../../../../utils/Redirect';

// styles
// import { wrongIcon } from '../styles';
// import theme from '../../../styles/theme';

// scripts
// import { redirectLogin } from '../../../utils/Redirect';

/**
 *
 * @param {string} token
 * @returns bool if valid is true else false
 */
export const checkEmailToken = (token, setVerified) => {
  // Check Token Endpoint
  axios.post(`/users/verify_email/${token}`).then((response) => {
    if (response.status === 204) {
      // alert('Email Verified');
      // setVerified('Verified');
      redirectHome(100);
    }
  }).catch((error) => {
    console.log(error);
    if (error?.response?.status === 400) {
      alert(error?.response?.data?.errorMessage);
    }
    setVerified('Error');
  });
};
