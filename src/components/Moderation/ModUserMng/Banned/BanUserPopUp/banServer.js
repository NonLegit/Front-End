// services
import axios from '../../../../../services/instance';

export const banUnbanUser = (userName, subReddit, action, punishType, note, Reason, banPeriod) => {
  axios.post(`/subreddits/${subReddit}/Ban_settings/${action}/${userName}`, JSON.stringify({
    punish_type: punishType,
    Note: note,
    punishReason: Reason,
    duration: banPeriod,
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

export const Editban = (username, subReddit, punishType, note, Reason, banPeriod) => {
  axios.patch(`/subreddits/${subReddit}/banned`, JSON.stringify({
    userName: username,
    punish_type: punishType,
    Note: note,
    punishReason: Reason,
    duration: banPeriod,
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
