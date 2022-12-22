import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { redditCookie } from './components/Authentication/authenticationServer';
/**
 * - UserLogin to check if usenae and give permissions to him or not
 */
export default function UserLogin(arr) {
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);
  useEffect(() => { redditCookie(setCookies, removeCookie); }, []);
  const userName = (cookies.redditUser?.userName);

  // console.log(userName, arr);
  return arr?.indexOf(userName) !== -1;
}
