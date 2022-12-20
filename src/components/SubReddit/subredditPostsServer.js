import { useState, useEffect } from 'react';
import { useListingContext } from '../../contexts/ListingContext';
import axios from '../../services/instance';
/**
 * get Posts to subreddit
 *
 * @property {string} Name - name of subreddit
 * @property {string} postClass - type of posts

 */
const PostsData = (Name, postClass) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { page, limit, setPage } = useListingContext();

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
        if (page === 0 || !data) { return response.data; }
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
  }, [postClass, Name, page, limit]);
  useEffect(() => {
    setPage(0);
    console.log('etghayar');
  }, [postClass]);
  return [data, error];
};
export default PostsData;
