import axios from './instance';
import { redirectLogin } from '../utils/Redirect';

export const notificationToken = async (token) => {
  const api = '/notifications/token';
  await axios.post(`${api}`, { token })
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
