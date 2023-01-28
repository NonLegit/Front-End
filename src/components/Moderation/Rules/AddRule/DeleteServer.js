import axios from '../../../../services/instance';
/**
 * Delete rule
 *
 * @property {string} Name - name of subreddit
 * @property {integer} id - id of rule
 *
 */
const DeleteRule = async (Name, id) => {
  let statusCode = '';
  await axios.delete(`subreddits/${Name}/rules/${id}`)
    .then((response) => {
      statusCode = response.status;
    }).catch((error) => {
      statusCode = error.response.status;
      console.log(error);
    });
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
};
export default DeleteRule;
