// services
import axios from '../../../../../services/instance';

export const MuteUnmuteUser = (userName, userNote, subReddit, action) => {
  axios.post(`/subreddits/${subReddit}/mute_settings/${action}/${userName}`, JSON.stringify({
    muteMessage: userNote,
  })).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
