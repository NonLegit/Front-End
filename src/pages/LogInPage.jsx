import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/styles';
import LogIn from '../components/Authentication/LogIn/LogIn';

function LogInPage() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <LogIn />
    </AuthenticationConatiner>
  );
}

export default LogInPage;
