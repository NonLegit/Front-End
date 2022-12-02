import { useCookies } from 'react-cookie';

export default function UserLogin(arr) {
  const [cookies] = useCookies(['redditUser']);
  const userName = (cookies.redditUser?.userName);
  return arr?.indexOf(userName) !== -1;
}
