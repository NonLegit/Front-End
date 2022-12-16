import { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import axios from '../../services/instance';

export const allSocialLinks = () => {
  const [data, dataError, statusCode] = useFetch('users/social_links');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data?.socialLinks];
};

export const postSocialLink = (dataToSend, settings, link) => {
  const [userLink, displayText, socialId] = dataToSend;
  console.log({
    userLink,
    displayText,
    socialId,
  });

  if (settings) {
    console.log('settings');
    axios.patch(`users/social_links/${link?._id}`, {
      userLink,
      displayText,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      if (error.response.status === 401) {
        window.location.pathname = 'login';
      }
      console.log(error);
    });
  } else {
    axios.post('users/social_links', {
      userLink,
      displayText,
      socialId,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      if (error.response.status === 401) {
        window.location.pathname = 'login';
      }
      console.log(error);
    });
  }
};
