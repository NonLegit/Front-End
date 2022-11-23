import axios from '../../../../../services/instance';

const PostData = async (url, user, subRedditName, type, adult) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  await axios.post(
    url,
    JSON.stringify({
      owner: user,
      name: subRedditName,
      type,
      NSFW: adult,
    }),
  ).then((response) => {
    console.log(response);
    return response.status;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostData;
