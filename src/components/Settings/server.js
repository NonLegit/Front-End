import axios from '../../services/instance';

const settingsPost = (prefs) => {
  const api = '/users/me/prefs';

  axios.patch(`${api}`, { prefs }).then((response) => {
    console.log('df');
    if (response.status === 200 || response.status === 201) {
      console.log(response.data);
    }
  }).catch((error) => {
    console.log(error);
    if (error.response.status === 401) {
      window.location.href = './login';
    } else if (error.response.status === 304) {
      alert('OPeration failed');
    }
  });
};
export default settingsPost;
