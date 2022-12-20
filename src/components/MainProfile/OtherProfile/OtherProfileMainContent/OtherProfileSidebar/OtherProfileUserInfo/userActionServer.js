import { useRef, useState, useEffect } from 'react';

import axios from '../../../../../../services/instance';

/**
 * block a user
 *
 * @property {string} username - username of blocked user
 * @returns {object} provided response through backend
 */

export const blockRequest = (username, block) => {
  const [data, setData] = useState(null);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (block === undefined) {
      return;
    }
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios.post(`users/${username}/${block ? 'block_user' : 'unblock_user'}`, {

    }).then((response) => {
      // console.log(response);
      if (response.status === 401) {
        window.location.pathname = 'login';
      }
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [username, block]);
  return [data];
};
