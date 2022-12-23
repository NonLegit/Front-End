// import { logOut } from '../..//MainNavBar/Navbar/UserList/server';
import { logOut } from '../../../MainNavBar/Navbar/UserList/server';

// import { removeRedditCookie } from '../../../Authentication/authenticationServer';
import axios from '../../../../services/instance';
import { redirectLogin } from '../../../../utils/Redirect';
/**
 * - delete account of user
 *  @param {string} username - username of user
 *  @param {string} password - password of user
 *  @param {function} removeCookie - functoion to remove cookies
 */
export const deleteAccount = (userName, password, removeCookie) => {
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
      // removeRedditCookie(removeCookie);
      logOut(removeCookie);
      redirectLogin(100);
    }
  }).catch((error) => {
    // 404
    console.log(error);
    alert(error?.response?.data?.errorMessage);
  });
};
