import axios from '../../../../../services/instance';

const PostData = async (url, subRedditName, type, adult) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  await axios.post(
    url,
    JSON.stringify({
      fixedName: subRedditName,
      type,
      nsfw: adult,
    }),
  ).then((response) => {
    console.log(response.status);
    if (response.status === 200 || response.status === 204) {
      window.location.pathname = `Subreddit/${subRedditName}`;
    }
    return response.status;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostData;
