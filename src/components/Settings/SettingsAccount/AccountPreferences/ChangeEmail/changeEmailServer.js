// import { removeRedditCookie } from '../../../Authentication/authenticationServer';
import { redirectHome } from '../../../../../utils/Redirect';
import axios from '../../../../../services/instance';
// import { redirectLogin } from '../../../../../utils/Redirect';

export const changeEmail = (newEmail, password) => {
  console.log('change EMAIL', newEmail, password);
  axios.post(
    '/users/change_email',
    {
      newEmail,
      password,
    },
  ).then((response) => {
    console.log('users/change_email', response);
    if (response?.status === 204) {
      alert('Email Updated Sucessfully You will recieve A verification Email');
      redirectHome(100);
    }
  }).catch((error) => {
    // 404
    console.log(error);
    alert(error?.response?.data?.errorMessage);
  });
};
