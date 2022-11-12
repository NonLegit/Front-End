import { useEffect, useState } from 'react';

// styles
import { AuthenticationConatiner } from '../styles';

// components
import SignUpEmail from './SignUpEmail/SignUpEmail';
import SignUpUsername from './SignUpUsername/SignUpUsername';
import LoadingPage from '../LoadingPage/LoadingPage';

// styles
import theme from '../../../styles/theme';

/**
 * SignUp Page Main Componnet with 2 view one for the Email and the Other for the userName
 *
 * @component
 * @returns {React.Component} SignUp Page
 */
function SignUp() {
  // states
  const [remeberMe, setremeberMe] = useState(false);
  const [userNamePage, setUserNamePage] = useState(false);
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null, score: 0,
  });

  // useEffect
  useEffect(() => {
    setremeberMe(false);
    setUserNamePage(false);
  }, []);

  const signUpView = userNamePage
    ? <SignUpUsername setUserNamePage={setUserNamePage} email={email} userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} />
    : <SignUpEmail setUserNamePage={setUserNamePage} email={email} setEmail={setEmail} />;

  return (
    <AuthenticationConatiner data-testid="signup-test">
      {remeberMe ? <LoadingPage /> : signUpView}
    </AuthenticationConatiner>
  );
}
export default SignUp;
