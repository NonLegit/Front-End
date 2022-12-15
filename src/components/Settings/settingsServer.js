import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
import useFetch from '../../hooks/useFetch';
/**
 * - settings Post data prefs
 */
export const settingsPost = async (prefs) => {
  const api = '/users/me/prefs';
  let message = '';
  let flag = 'error';
  console.log(prefs);
  await axios.patch(`${api}`, prefs)
    .then((response) => {
      console.log(response);
      if (response.status === 304) {
        message = 'Operation failed';
      } else {
        flag = 'success';
        message = 'operation done successfully';
      }
    }).catch((error) => {
      console.log(error);
      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        }
      }
    });
  return [message, flag];
};
export const settingsFetch = () => {
  const api = '/users/me/prefs';
  const [data, dataError, statusCode] = useFetch(api);
  console.log('www', data);
  if (statusCode === 401) {
    redirectLogin();
  }
  if (dataError) {
    console.log(dataError);
  }
  const prefs = data;
  return [prefs];
};

export const imagePost = async (data) => {
  const api = '/users/images';
  console.log(data);
  await axios.post(`${api}`, (data))
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        }
      }
    });
};
