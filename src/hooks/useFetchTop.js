import { useState, useEffect } from 'react';
import { useListingContext } from '../contexts/ListingContext';
import axios from '../services/instance';

const useFetchTop = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const { page, limit, setPage } = useListingContext();
  console.log(url);

  useEffect(() => {
    console.log('etghayar1');
    axios.get(url, {
      params: {
        limit,
        page,
      },
    }).then((response) => {
      console.log('el data yabbbbbbb', response);
      console.log('ana geeeet', page, limit);
      setData((data) => {
        if (page === 0 || !data) {
          console.log('zero');
          return response.data;
        }
        const tempData = {
          ...data,
        };
        tempData.data = [...tempData.data, ...response.data.data];
        return tempData;
      });
      // console.log(response.data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, [page, limit, url]);

  useEffect(() => {
    setPage(0);
    console.log('etghayar2');
  }, [url]);

  return [data, error, statusCode];
};
export default useFetchTop;
