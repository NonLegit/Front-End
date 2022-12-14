import axios from '../../../../../services/instance';
import { redirectLogin } from '../../../../../utils/Redirect';
/**
 * - settings Post data prefs
 */
export const socialDelete = async (id) => {
  const api = `/users/social_links/${id}`;
  await axios.delete(`${api}`)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      if (error?.response.status === 401) {
        redirectLogin();
      }
      console.log(error);
    });
};
