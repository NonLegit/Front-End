import axios from '../../services/instance';
/**
 * Join to subreddit
 *
 * @property {string} api - url to send data
 * @property {string} prefs - data to change

 */
const patchData = (api, prefs) => {
  axios.patch(`${api}`, prefs).then((response) => response.status).catch((error) => {
    console.log(error);
  });
};
export default patchData;
