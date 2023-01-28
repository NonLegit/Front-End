import axios from '../../../../../services/instance';
/**
 * Edit Flair
 *
 * @property {string} Name - name of subreddit
 * @property {integer} id - id of flair
 * @property {object} prefs - data to change

 */
const EditFlair = async (Name, id, prefs) => {
  let statusCode = '';
  await axios.patch(`subreddits/${Name}/flair/${id}`, prefs).then((response) => {
    statusCode = response.status;
  }).catch((error) => {
    statusCode = error.response.status;
    console.log(error);
  });
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
};
export default EditFlair;
