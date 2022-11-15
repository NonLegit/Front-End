import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_ENV === 'development' ? process.env.REACT_APP_PROXY_DEVELOPMENT : process.env.REACT_APP_PROXY_PRODUCTION,
});

export default instance;
