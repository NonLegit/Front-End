import axios from '../../services/instance';

const settingsPost = (prefs) => {
  const api = '/users/me/prefs';

  axios.post(`${api}`, { prefs }).then((response) => {
    console.log('df');
    if (response.status === 200 || response.status === 201) {
      console.log(response.data);
    }
  }).catch((error) => {
    console.log(error);
    if (error.response.status === 401) {
      console.log('status 401 is returned');
    } else if (error.response.status === 304) {
      console.log('status 304 is returned');
    }
  });
};
export default settingsPost;
