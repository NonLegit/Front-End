import { useState, useEffect } from 'react';
import axios from '../../../../../../services/instance';

/**
*
* Function to perfom api request. fetch list of moderators
* @param {string} subredditName - name of the subreddit
* @returns {Array} array of moderators
*/

export const moderatorsFetch = (subredditName) => {
  const [data, setData] = useState([]);

  const api = `/subreddits/${subredditName}/moderators`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setData(actualData.data.data);
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

export const invitedmoderatorsFetch = (subredditName) => {
  const [data, setData] = useState([]);

  const api = `/subreddits/${subredditName}/invited_moderators`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data.status);
        setData(actualData.data.data);
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
