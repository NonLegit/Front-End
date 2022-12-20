import { redirectLogin } from '../../../utils/Redirect';
import useFetch from '../../../hooks/useFetch';
import useFetchParams from '../../../hooks/useFetchParams';

const homePageServer = (postClass) => {
  const postsUrl = `/users/${postClass || 'best'}`;
  // eslint-disable-next-line no-unused-vars
  const [data, postsError, statusCode] = useFetchParams(postsUrl);
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

  const [communitiesData, communitiesError, communitiesStatusCode] = useFetch('/subreddits/random/leaderboard?limit=4&page=0');
  if (communitiesStatusCode === 401) {
    redirectLogin();
  }
  return [posts, postsError, communitiesData?.data, communitiesError];
};

export default homePageServer;
