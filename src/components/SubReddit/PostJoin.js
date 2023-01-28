import Done from '../AlertMessage';
import axios from '../../services/instance';
/**
 * Join to subreddit
 *
 * @property {string} url - url to send data
 * @property {string} action - sub / unsub

 */
const PostJoin = async (url, action) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  await axios.post(url, [], {
    params: {
      action,
    },
  }).then((response) => {
    console.log(response);
    if (response?.status === 200 || response?.status === 200) {
      Done('Done');
    }
    return true;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostJoin;
