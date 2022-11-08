import axios from '../services/instance';

const usePost = (url, dataToPost) => {
  console.log(url, dataToPost);

  axios.post(url, JSON.stringify(dataToPost)).then((response) => {
    console.log(response.data);
  }).catch((e) => {
    console.log(e);
  });
};
export default usePost;
