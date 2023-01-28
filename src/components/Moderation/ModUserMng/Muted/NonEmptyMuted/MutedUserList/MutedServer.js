import { useState, useEffect } from 'react';
import axios from '../../../../../../services/instance';

/**
*
* Function to perfom api request. fetch list of muted users
* @param {string} subredditName - name of the subreddit
* @returns {Array} array of muted users
*/
export const mutedFetch = (subredditName) => {
  const [data, setData] = useState([]);

  const api = `/subreddits/${subredditName}/muted`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data.status);
        setData(actualData.data.data.filter((users) => users.type.includes('muted')));
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
