// services
import axios from '../../../../services/instance';

// Scripts

import { removeRedditCookie } from '../../../Authentication/authenticationServer';

export const logOut = (removeCookie) => {
  console.log('Logout clicked');
  axios.post('/users/logout').then((response) => {
    console.log('logout Response', response);
    // jwt Cookie is sucessfully removed
    if (response.status === 200 || response.status === 201) {
      // remove Reddit Cookie
      console.log('Removed');
      removeRedditCookie(removeCookie);
      if (localStorage.getItem('RedditHistory')) {
        localStorage.removeItem('RedditHistory');
      }
    }
  }).catch((error) => {
    if (error.response.status === 401) {
      // already not logged in Not authorized
      console.log(error.response.data.errorMessage);
    }
  });
};
