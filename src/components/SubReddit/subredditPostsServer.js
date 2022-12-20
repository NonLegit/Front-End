import { useState, useEffect } from 'react';
import { useListingContext } from '../../contexts/ListingContext';
import axios from '../../services/instance';

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
  console.log('hosny', data);
  const dbPosts = data?.data;
  console.log('hosn2', dbPosts);
  // console.log('from home', statusCode);
  console.log('posts', dbPosts?.length);
  const posts = dbPosts?.map((post) => {
    // for backend bugs
    const temp = {
      _id: 1,
      text: '',
      backgroundColor: '',
      textColor: '',
    };
    const {
      text: flairText,
      backgroundColor: flairBackgroundColor,
      textColor: flairColor,
    } = (post.flairId) || temp;
    const { name: ownerName, icon: ownerIcon } = post.owner;
    const { name: authorName } = post.author;
    return ({
      ...post,
      flairText,
      flairBackgroundColor,
      flairColor,
      ownerName,
      ownerIcon,
      authorName,
    });
  });
  console.log('hosny3', posts);
  return [{ ...data, data: posts }, error];
};
export default PostsData;
