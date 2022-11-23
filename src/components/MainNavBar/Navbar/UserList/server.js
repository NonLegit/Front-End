// services
import axios from '../../../../services/instance';

// Scripts
import { removeRedditCookie } from '../../../Authentication/scripts';

export const logOut = (removeCookie) => {
  axios.post('/users/logout').then((response) => {
    // jwt Cookie is sucessfully removed
    if (response.status === 200 || response.status === 201) {
      // emove Reddit Cookie
      removeRedditCookie(removeCookie);
    }
  }).catch((error) => {
    if (error.response.status === 401) {
      // already not logged in Not authorized
      console.log(error.response.data.errorMessage);
    }
  });
};
