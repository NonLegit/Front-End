import Done from '../../../AlertMessage';
import axios from '../../../../services/instance';
/**
 * Edit rule
 *
 * @property {string} Name - name of subreddit
 * @property {integer} id - id of rule
 *
 */
const EditRule = async (Name, id, prefs) => {
  let statusCode = '';
  await axios.patch(`subreddits/${Name}/rules/${id}`, prefs).then((response) => {
    statusCode = response.status;
  }).catch((error) => {
    statusCode = error.response.status;
    console.log(error);
  });
  if (statusCode === 200 || statusCode === 204) {
    Done('Rule Edited');
  }
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
};
export default EditRule;
