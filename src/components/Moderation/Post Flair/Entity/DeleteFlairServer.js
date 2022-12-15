import axios from '../../../../services/instance';

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
