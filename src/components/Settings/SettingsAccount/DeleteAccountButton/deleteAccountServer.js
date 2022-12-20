import { removeRedditCookie } from '../../../Authentication/authenticationServer';
import axios from '../../../../services/instance';
import { redirectLogin } from '../../../../utils/Redirect';

export const deleteAccount = (userName, password) => {
  console.log('deleteAccount', userName, password);
  axios.post(
    '/users/delete_account',
    {
      userName,
      password,
    },
  ).then((response) => {
    console.log('users/delete_account', response);
    if (response?.status === 204) {
      // Deteletd Sucessfully
      alert('User Deleted Sucessfully');
      removeRedditCookie();
      redirectLogin(10);
    }
  }).catch((error) => {
    // 404
    console.log(error);
    alert(error?.response?.data?.message);
  });
};
