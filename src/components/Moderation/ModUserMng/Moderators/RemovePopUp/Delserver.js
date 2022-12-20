// services
import axios from '../../../../../services/instance';

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
