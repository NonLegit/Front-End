// services
import axios from '../../../../../services/instance';

/**
*
* Function to perfom api request. remove invitation
* @param {String} userNmae User name of the user
* @param {string} subredditName - name of the subreddit
* @returns void
*/
export const delMod = (userName, subReddit) => {
  axios.del(`/subreddits/${subReddit}/moderators/${userName}`).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
