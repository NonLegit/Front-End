// import { useEffect, useState } from 'react';
// import axios from '../../../services/instance';
// /**
//  * Follow
//  *
//  * @property {string} username - username to send
//  * @property {boolean} isFollowed - name for rule

//  */
// export const followRequest = (username, isFollowed) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (isFollowed === undefined) {
//       console.log('undefined');
//       return;
//     }
//     axios.post(`users/${username}/${isFollowed ? 'follow' : 'unfollow'}`, {

//     }).then((response) => {
//       if (response.status === 401) {
//         window.location.pathname = 'login';
//       }
//       setData(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });
//   }, [username, isFollowed]);
//   return [data];
// };

import Done from '../../AlertMessage';
import axios from '../../../services/instance';
/**
  * Follow
  *
  * @property {string} username - username to send
  * @property {boolean} isFollowed - name for rule

 */
const followRequest = async (username, isFollowed) => {
  axios.post(`users/${username}/${isFollowed ? 'follow' : 'unfollow'}`, {

  }).then((response) => {
    if (response.status === 401) {
      window.location.pathname = 'login';
    }
    if (response.status === 200 || response.status === 204) {
      Done('Done');
    }
  }).catch((error) => {
    console.log(error);
  });
};
export default followRequest;
