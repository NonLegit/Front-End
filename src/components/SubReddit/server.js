import axios from '../../services/instance';

const patchData = (api, prefs) => {
  axios.patch(`${api}`, prefs).then((response) => response.status).catch((error) => {
    console.log(error);
  });
};
export default patchData;
