import { useEffect, useState } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import { AuthenticationConatiner } from '../styles';

import SignUpEmail from './SignUpEmail/SignUpEmail';
import SignUpUsername from './SignUpUsername/SignUpUsername';
import theme from '../../../styles/theme';

/**
 * SignUp Page Differenet Components
 * @returns {React.Component} - Main Body of SignUp
 */
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
    <AuthenticationConatiner data-testid="signup-test">
      {remeberMe ? <LoadingPage /> : signUpView}
    </AuthenticationConatiner>
  );
}
export default SignUp;
