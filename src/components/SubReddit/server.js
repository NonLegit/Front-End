import axios from '../../services/instance';

const patchData = (api, prefs) => {
  axios.patch(`${api}`, prefs).then(() => {

    // console.log(response.data);

  }).catch((error) => {
    console.log(error);
  });
};
export default patchData;
