import { useState, useEffect } from 'react';
import axios from '../../../../../../services/instance';

/**
*
* Function to perfom api request. fetch banned user list
* @param {string} subredditName - name of the subreddit
* @returns {Array} array of banned users
*/

export const bannedFetch = (subredditName) => {
  const [data, setData] = useState([]);

  const api = `/subreddits/${subredditName}/banned`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setData(actualData.data.data.filter((users) => users.type.includes('banned')));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = './login';
        }

        console.log(error);
      });
  }, [api]);
  return [data];
};
