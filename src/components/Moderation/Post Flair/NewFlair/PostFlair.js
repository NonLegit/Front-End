import axios from '../../../../services/instance';
/**
 * Add New Flair
 *
 * @property {boolean} url - url to send data on
 * @property {boolean} text - text flair
 * @property {boolean} backgroundColor - background color for flair
 * @property {boolean} textColor - text color
 *
 * @returns {object} provided response through backend
 */

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
