import useFetch from '../../../hooks/useFetch';
import { redirectLogin } from '../../../utils/Redirect';
import axios from '../../../services/instance';
/**
 * - fetch list of people are blocked
 */
export const privacyFetch = () => {
  const api = '/users/blocked';
  const [data, dataError, statusCode] = useFetch(api);
  console.log('www', data);
  if (statusCode === 401) {
    redirectLogin();
  }
  if (dataError) {
    console.log(dataError);
  }

  return [data?.blocked];
};
/**
 * - post data to block or unblock user
 */
export const blockuser = async (user, type) => {
  const api = `/users/${user}/${type}`;
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
