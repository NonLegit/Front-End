import { useState, useEffect } from 'react';
import axios from '../services/instance';

const conditionalUseFetch = (url, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    if (deps) {
      axios.get(url).then((response) => {
        // console.log(response);
        setData(response.data);
        console.log(response.data);
        setStatusCode(response.status);
        // console.log(response.data);
        setError(null);
      }).catch((error) => {
        setError(error);
        setStatusCode(error.response.status);
        console.log(error);
      });
    } else {
      setData(null);
      setError(null);
      setStatusCode(null);
    }
  }, [url]);

  return [data, error, statusCode];
};
export default conditionalUseFetch;
