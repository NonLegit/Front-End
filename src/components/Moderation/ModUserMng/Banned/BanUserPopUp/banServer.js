// services
import axios from '../../../../../services/instance';

/**
*
* Function to perfom api request. ban or unban certain user
* @param {String} userNmae User name of the user
* @param {enum} action  enum ban or unban
* @param {string} subredditName - name of the subreddit
* @param {enum} punishType - indicates why this user is banned
* @param {string} note - note from the moderator about this user
* @param {string} reason - more explanation about this user to be banned like reason etc..
* @param {string} banPeriod - the period of banning certain user it rages from 0 to 999 or can be permanently
* @returns void
*/
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

/**
*
* Function to perfom api request. edit banned user data
* @param {String} userNmae User name of the user
* @param {string} subredditName - name of the subreddit
* @param {enum} punishType - indicates why this user is banned
* @param {string} note - note from the moderator about this user
* @param {string} reason - more explanation about this user to be banned like reason etc..
* @param {string} banPeriod - the period of banning certain user it rages from 0 to 999 or can be permanently
* @returns void
*/
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
