import axios from '../../../../services/instance';
/**
 * Delete Flair
 *
 * @property {string} Name - name of subreddit
 * @property {integer} id - id of flair
 *
 */
const DeleteFlair = async (Name, id) => {
  let statusCode = '';
  await axios.delete(`subreddits/${Name}/flair/${id}`)
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
export default DeleteFlair;
