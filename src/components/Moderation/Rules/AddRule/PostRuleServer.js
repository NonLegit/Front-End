import axios from '../../../../services/instance';

const PostRule = async (url, defaultName, description, appliesTo) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  await axios.post(
    url,
    JSON.stringify({
      defaultName,
      description,
      appliesTo,
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
export default PostRule;
