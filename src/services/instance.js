import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://0902e8c4-d1ea-4cb3-9e44-bfbc7241fa61.mock.pstmn.i',
});

export default instance;
