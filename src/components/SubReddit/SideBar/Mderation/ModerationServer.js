import { useState } from 'react';
import axios from '../../../../services/instance';

const patchData = (Name, prefs) => {
  const [statusCode, setStatusCode] = useState(null);

  axios.patch(`subreddits/${Name}`, prefs).then((response) => {
    setStatusCode(response.status);
  }).catch((error) => {
    console.log(error);
  });
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
};
export default patchData;
