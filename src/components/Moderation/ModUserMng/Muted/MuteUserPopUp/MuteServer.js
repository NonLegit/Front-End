// services
import axios from '../../../../../services/instance';

/**
*
* Function to perfom api request. mute or unmute a user
* @param {String} userNmae User name of the user
* @param {enum} action  enum mute or unmute
* @param {string} subredditName - name of the subreddit
* @param {string} userNote - note from the moderator about this user
* @returns void
*/
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
