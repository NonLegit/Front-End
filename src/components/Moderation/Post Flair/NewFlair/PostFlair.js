import axios from '../../../../services/instance';

const PostFlair = async (url, text, backgroundColor, textColor) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  await axios.post(
    url,
    JSON.stringify({
      text,
      backgroundColor,
      textColor,

    }),
  ).then((response) => {
    console.log(response.status);
    if (response?.status === 401) {
      window.location.pathname = 'login';
    }
    return response.status;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostFlair;
