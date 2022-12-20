import useFetch from '../../../hooks/useFetch';

const popularPageServer = (postClass) => {
  const postsUrl = `/users/${postClass || 'best'}`;
  const [data, postsError, statusCode] = useFetch(postsUrl);
  const dbPosts = data?.data;
  console.log('from home', statusCode);
  console.log('posts', dbPosts);

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
  console.log('posts final', posts);
  return [posts, postsError];
};

export default popularPageServer;
