import { useState, useEffect } from 'react';
import axios from '../services/instance';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    }).catch((error) => {
      setError(error);
    });
  }, []);

  return [data, error];
};
export default useFetch;
