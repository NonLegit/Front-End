import { useRef, useState, useEffect } from 'react';

import axios from '../../../../../../services/instance';

/**
 * follow a user
 *
 * @property {string} username - username of user to be followed
 * @returns {object} provided response through backend
 */

export const followRequest = (username, isFollowed, handleNotBlocked) => {
  const [data, setData] = useState(null);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFollowed === undefined) {
      return;
    }
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios.post(`users/${username}/${isFollowed ? 'follow' : 'unfollow'}`, {

    }).then((response) => {
      // console.log(response);
      if (response.status === 200 || response.status === 201) {
        handleNotBlocked();
      } else if (response.status === 401) {
        window.location.pathname = 'login';
      }
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [username, isFollowed]);
  return [data];
};

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
