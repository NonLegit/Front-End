import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/styles';
import ResetPassword from '../components/Authentication/ResetPassword/ResetPassword';

function ResetPasswordPage() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <ResetPassword />
    </AuthenticationConatiner>
  );
}

export default ResetPasswordPage;
