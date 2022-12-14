import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
import useFetch from '../../hooks/useFetch';
/**
 * - settings Post data prefs
 */
export const settingsPost = async (prefs) => {
  const api = '/users/me/prefs';
  let message = '';
  console.log(prefs);
  await axios.patch(`${api}`, prefs)
    .then((response) => {
      console.log(response);
      if (response.status === 304) {
        message = 'Operation failed';
      } else {
        message = 'operation done successfully';
      }
    }).catch((error) => {
      // if (error?.response.status === 401) {
      //   redirectLogin();
      // }
      console.log(error);
    });
  return message;
};
export const image = async (file, type) => {
  const api = '/users/images';
  const message = '';
  console.log(file);
  console.log(type);
  await axios.post(`${api}`, {
    type,
    file,
  })
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      // if (error?.response.status === 401) {
      //   redirectLogin();
      // }
      console.log(error);
    });
  return message;
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
