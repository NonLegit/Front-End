import axios from '../../../services/instance';
import { redirectLogin } from '../../../utils/Redirect';
/**
 * - post message from
 */

export const postData = async (data) => {
  const api = '/messages';
  const message = '';
  const flag = 'error';
  await axios.post(`${api}`, data)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      if (error?.response?.status === 401) {
        redirectLogin();
      }
    });
  return [message, flag];
};
