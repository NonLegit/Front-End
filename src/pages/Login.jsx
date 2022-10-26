import { AuthenticationConatiner, AuthenticationBG, AuthenticationBody } from '../components/Authentication/AuthenticationConatiners/styles';
import Divider from '../components/Authentication/Divider/Divider';
import LogInFirstParty from '../components/Authentication/LogIn/LogInFirstParty';
import LogInThirdParty from '../components/Authentication/LogIn/LogInThirdParty';
import LogInTitle from '../components/Authentication/LogIn/LogInTitle';

function Login() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <AuthenticationBody>
        <LogInTitle />
        <LogInThirdParty />
        <Divider />
        <LogInFirstParty />
      </AuthenticationBody>
    </AuthenticationConatiner>
  );
}

export default Login;
