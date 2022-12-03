import useFetch from '../../../hooks/useFetch';

const homePageServer = (postClass) => {
  const postsUrl = `/users/${postClass || 'best'}`;
  const [data, postsError, statusCode] = useFetch(postsUrl);
  const dbPosts = data?.data;
  console.log('from home', statusCode);

  const posts = dbPosts?.map((post) => {
    const {
      text: flairText,
      backgroundColor: flairBackgroundColor,
      textColor: flairColor,
    } = post.flairId;
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
  return [posts, postsError];
};

export default homePageServer;
