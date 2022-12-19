import { useEffect } from 'react';
import { useListingContext } from '../../../contexts/ListingContext';
import useFetchParams from '../../../hooks/useFetchParams';

const homePageServer = (postClass) => {
  const postsUrl = `/users/${postClass || 'best'}`;
  const { setPage } = useListingContext();
  // eslint-disable-next-line no-unused-vars
  const [data, postsError, statusCode] = useFetchParams(postsUrl);
  useEffect(() => {
    setPage(0);
    console.log('etghayar');
  }, [postsUrl]);
  const dbPosts = data?.data;
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
  // console.log('posts final', posts, posts?.length);
  return [posts, postsError];
};

export default homePageServer;
