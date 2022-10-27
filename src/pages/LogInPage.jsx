import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/AuthenticationConatiners/styles';
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
