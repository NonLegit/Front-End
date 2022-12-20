// services
import axios from '../../../../../services/instance';

export const ApprovedUnapprovedUser = (userName, userNote, subReddit, action) => {
  axios.post(`/subreddits/${subReddit}/approve_settings/${action}/${userName}`, JSON.stringify({
    muteMessage: userNote,
  })).then(async (response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
