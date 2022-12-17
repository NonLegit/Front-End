import { useCookies } from 'react-cookie';

// compnents
import Navbar from './Navbar/Navbar';
import SignNavbar from './SignNavbar/SignNavbar';

function MainNavBar() {
  // cookies
  const [cookies] = useCookies(['redditUser']);

  return (
    (cookies.redditUser === undefined) ? <Navbar /> : <SignNavbar />
  );
}

export default MainNavBar;
