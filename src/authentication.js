import { useCookies } from 'react-cookie';
import { redditCookie } from './components/Authentication/authenticationServer';

export default function UserLogin(arr) {
  const [cookies, setCookies] = useCookies(['redditUser']);

  redditCookie(setCookies);
  const userName = (cookies.redditUser?.userName);
  return arr?.indexOf(userName) !== -1;
}
