import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/styles';
import LogIn from '../components/Authentication/LogIn/LogIn';

/**
 * Component For Login Page Route='/login'
 * @component
 * @example
 * return (
 *   <LogInPage/>
 * )
 */
function LogInPage() {
  return (
    <AuthenticationConatiner data-testid="login-test">
      <AuthenticationBG />
      <LogIn />
    </AuthenticationConatiner>
  );
}

export default LogInPage;
