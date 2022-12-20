import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { redditCookie } from './components/Authentication/authenticationServer';

export default function UserLogin(arr) {
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);
  useEffect(() => { redditCookie(setCookies, removeCookie); }, []);
  const userName = (cookies.redditUser?.userName);

  // console.log(userName, arr);
  return arr?.indexOf(userName) !== -1;
}
