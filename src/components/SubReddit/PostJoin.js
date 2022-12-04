import axios from '../../services/instance';

const PostJoin = async (url, action) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  await axios.post(url, {
    action,
  }).then((response) => {
    console.log(response);
    return true;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostJoin;
