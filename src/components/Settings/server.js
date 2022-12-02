import axios from '../../services/instance';
/**
 * - settings Post data prefs
 */
const settingsPost = async (prefs) => {
  const api = '/users/me/prefs';
  let result = -1;
  await axios.patch(`${api}`, { prefs })
    .then((response) => {
      console.log(response);
      result = response.status;
    }).catch((error) => {
      console.log(error);
      result = error.response.status;
    });
  return result;
};
export default settingsPost;
