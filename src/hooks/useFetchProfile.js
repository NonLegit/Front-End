import { useState, useEffect } from 'react';
import { useListingContext } from '../contexts/ListingContext';
import axios from '../services/instance';

const useFetchProfile = (url, sort) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const { page, limit, setPage } = useListingContext();
  console.log(url);

  useEffect(() => {
    console.log('etghayar1');
    console.log(url, limit, page, sort);
    axios.get(url, {
      params: {
        limit,
        page,
        sort,
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
        tempData.posts = [...tempData.posts, ...response.data.posts];
        tempData.comments = [...tempData.comments, ...response.data.comments];
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
  }, [page, limit, url, sort]);

  useEffect(() => {
    setPage(0);
    console.log('etghayar2');
  }, [url, sort]);

  return [data, error, statusCode];
};
export default useFetchProfile;
