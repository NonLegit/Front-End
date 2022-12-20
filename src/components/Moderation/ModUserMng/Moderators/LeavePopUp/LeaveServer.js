// services
import axios from '../../../../../services/instance';

export const LeaveMod = (subReddit) => {
  axios.post(`/subreddits/${subReddit}/leave_moderator`).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
