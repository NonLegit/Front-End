import { useState, useEffect } from 'react';
import { useListingContext } from '../../contexts/ListingContext';
import axios from '../../services/instance';

const PostsData = (Name, postClass) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { page, limit } = useListingContext();

  useEffect(() => {
    console.log(postClass);

    axios.get(`/subreddits/${Name}/${postClass || 'hot'}`, {
      params: {
        limit,
        page,
      },
    }).then((response) => {
      console.log(response);
      if (response?.status === 401) {
        window.location.pathname = 'login';
      }
      console.log('ana geeeet', page, limit);
      setData((data) => {
        if (!data) { return response.data; }
        const tempData = {
          ...data,
        };
        tempData.data = [...tempData.data, ...response.data.data];
        return tempData;
      });
      setError(null);
    }).catch((error) => {
      setError(error);
      console.log(error);
    });
  }, [postClass, Name]);
  return [data, error];
};
export default PostsData;
