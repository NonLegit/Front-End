import axios from 'axios';

// const { REACT_APP_ENV, REACT_APP_PROXY_DEVELOPMENT, REACT_APP_PROXY_PRODUCTION } = process.env;
const instance = axios.create({
  // baseURL: REACT_APP_ENV === 'development' ? REACT_APP_PROXY_DEVELOPMENT : REACT_APP_PROXY_PRODUCTION,
  // baseURL: 'https://api.nonlegit.click/api/v1/',
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;
