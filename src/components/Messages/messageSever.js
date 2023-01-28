import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
/**
 * - block user server in message bage
 */

export const blockuser = async (user) => {
  const api = `/users/${user}/block_user`;
  let message = '';
  let flag = 'error';
  await axios.post(`${api}`)
    .then((response) => {
      console.log(response);
      flag = 'success';
      message = 'operation done successfully';
    }).catch((error) => {
      console.log(error);
      if (error?.response?.status === 401) {
        redirectLogin();
      } else if (error?.response?.status === 400) {
        message = 'try blocking yourself';
      } else if (error?.response?.status === 404) {
        message = 'user not found';
      } else if (error?.response?.status === 405) {
        message = 'other user has blocked you';
      } else {
        message = 'already blocked';
      }
    });
  return [message, flag];
};
