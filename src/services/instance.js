import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://9370b8a3-3862-45f6-b3f0-060ec85cbc3f.mock.pstmn.io',
});

export default instance;
