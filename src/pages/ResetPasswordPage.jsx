// components
import ResetPassword from '../components/Authentication/ResetPassword/ResetPassword';

// styles
import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/styles';

function ResetPasswordPage() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <ResetPassword />
    </AuthenticationConatiner>
  );
}

export default ResetPasswordPage;
