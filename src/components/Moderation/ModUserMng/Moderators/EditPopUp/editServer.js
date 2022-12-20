// services
import axios from '../../../../../services/instance';

export const editMod = (userName, subReddit, everything, manageUsers, manageSettings, manageFlair, managePost) => {
  axios.patch(`/subreddits/${subReddit}/moderators/${userName}`, JSON.stringify({
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

export const removeMod = (userName, subReddit) => {
  axios.delete(`/subreddits/${subReddit}/moderators/${userName}`).then((response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
