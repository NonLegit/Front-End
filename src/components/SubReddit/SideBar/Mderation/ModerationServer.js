import Done from '../../../AlertMessage';
import axios from '../../../../services/instance';
/**
 * edit data for moderation
 *
 * @property {string} Name - name of subreddit
 * @property {object} prefs - data to change

 */
const patchData = async (Name, prefs) => {
  let statusCode = '';
  await axios.patch(`subreddits/${Name}`, prefs).then((response) => {
    statusCode = response.status;
  }).catch((error) => {
    statusCode = error.response.status;
    console.log(error);
  });
  if (statusCode === 200 || statusCode === 200) {
    Done('Chanes Save');
  }
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
};
export default patchData;
