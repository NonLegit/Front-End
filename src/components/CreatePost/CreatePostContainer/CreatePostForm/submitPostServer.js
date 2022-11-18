import axios from '../../../../services/instance';

const submitPostServer = (post) => {
  axios.post('/posts', JSON.stringify(post)).then((response) => {
    console.log(response.data);
    console.log(response.status);
    alert('posted successfully');
  }).catch((e) => {
    console.log(e);
    alert('somethig went wrong');
  });
};

export default submitPostServer;
