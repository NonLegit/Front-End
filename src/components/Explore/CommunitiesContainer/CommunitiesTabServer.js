import { useState, useEffect } from 'react';
import axios from '../../../services/instance';

/**
*
* Function to perfom api request and fetch communities
* @param {string} name - title of explore page
* @returns {Array} array of communities
*/

export const exploreCommunities = (name) => {
  const [data, setData] = useState([]);

  const api = `/t/${name}/`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setData(actualData.data);
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
