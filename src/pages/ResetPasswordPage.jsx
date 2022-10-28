import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/AuthenticationConatiners/styles';
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
