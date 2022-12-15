import axios from '../../../../../services/instance';

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
