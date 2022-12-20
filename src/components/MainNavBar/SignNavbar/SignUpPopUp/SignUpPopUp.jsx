/* eslint-disable import/no-cycle */
import { useState } from 'react';
import { useCookies } from 'react-cookie';

// components
import SignUpPopUpEmail from './SignUpPopUpEmail/SignUpPopUpEmail';

// styles
import theme from '../../../../styles/theme/index';
import SignUpPopUpUserName from './SignUpPopUpUserName/SignUpPopUpUserName';

function SignUpPopUp() {
  const [userNamePage, setUserNamePage] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null, score: 0,
  });

  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);

  const signUpView = userNamePage
    ? <SignUpPopUpUserName setUserNamePage={setUserNamePage} email={email} userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} setCookies={setCookies} removeCookie={removeCookie} />
    : <SignUpPopUpEmail setUserNamePage={setUserNamePage} email={email} setEmail={setEmail} />;

  return (
    signUpView
  );
}

export default SignUpPopUp;
