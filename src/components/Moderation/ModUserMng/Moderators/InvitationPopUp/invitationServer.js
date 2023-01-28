// services
import axios from '../../../../../services/instance';

/**
*
* Function to perfom api request. invite a certain user to the subreddit.
* @param {String} userNmae User name of the user
* @param {string} subredditName - name of the subreddit
* @param {boolean} everything - moderator has all access in the subreddit
* @param {boolean} manageUsers - moderator has access on user only
* @param {boolean} manageSettings - moderator has access on settings
* @param {boolean} manageFlair - moderator has access on post flairs
* @param {boolean} managePost - moderator has access on posts
* @returns void
*/

export const inviteMod = (userName, subReddit, everything, manageUsers, manageSettings, manageFlair, managePost) => {
  axios.post(`/subreddits/${subReddit}/moderators/${userName}`, JSON.stringify({
    permissions: {
      all: everything,
      access: manageUsers,
      config: manageSettings,
      flair: manageFlair,
      posts: managePost,
    },
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
