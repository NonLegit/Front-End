import { useState, useEffect } from 'react';
import axios from '../../../../services/instance';

/**
*
* Function to perfom api request and fetch approved users
* @param {string} subredditName - name of the subreddit
* @returns {Array} array of approved users
*/
export const ApprovedFetch = (subredditName) => {
  const [data, setData] = useState([]);
  const api = `/subreddits/${subredditName}/approved_users`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data.data);
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

/**
*
* Function to perfom api request. approve or disprove certain user
* @param {String} userNmae User name of the user
* @param {enum} action  enum approve or disprove
* @param {string} subredditName - name of the subreddit
* @returns {Array} array of approved users
*/
export const ApprovedUnapprovedUser = (userName, subReddit, action) => {
  axios.post(`/subreddits/${subReddit}/${userName}/${action}/approve_user`).then(async (response) => {
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      console.log('sucess');
    }
  }).catch((error) => {
    console.log(error);
    console.log(error.response.data.errorMessage);
  });
};
