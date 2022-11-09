import { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import { AuthenticationConatiner } from '../styles';

import SignUpEmail from './SignUpEmail/SignUpEmail';
import SignUpUsername from './SignUpUsername/SignUpUsername';
import theme from '../../../styles/theme';

function SignUp() {
  const [remeberMe, setremeberMe] = useState(false);
  const [userNamePage, setUserNamePage] = useState(false);
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });

  useEffect(() => {
    // check if logged in before (cokkies check)
    setremeberMe(false);
    setUserNamePage(false);
  }, []);

  const signUpView = userNamePage
    ? <SignUpUsername setUserNamePage={setUserNamePage} email={email} />
    : <SignUpEmail setUserNamePage={setUserNamePage} setEmail={setEmail} />;

  return (
    <AuthenticationConatiner>
      {remeberMe ? <LoadingPage /> : signUpView}
    </AuthenticationConatiner>
  );
}
export default SignUp;
