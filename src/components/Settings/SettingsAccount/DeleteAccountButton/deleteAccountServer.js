import axios from '../../../../services/instance';
import { redirectLogin } from '../../../../utils/Redirect';

export const deleteAccount = async (prefs) => {
  const api = '/users/me/prefs';
  let message = '';
  let flag = 'error';
  console.log(prefs);
  await axios.patch(`${api}`, prefs)
    .then((response) => {
      console.log(response);

      flag = 'success';
      message = 'operation done successfully';
    }).catch((error) => {
      console.log(error);
      message = 'Operation failed';

      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        } else {
          message = 'Operation failed';
        }
      }
    });
  return [message, flag];
};
