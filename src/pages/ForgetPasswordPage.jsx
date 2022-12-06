import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/styles';
import ForgetPassword from '../components/Authentication/ForgetPassword/ForgetPassword';

function ForgetPasswordPage() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <ForgetPassword />
    </AuthenticationConatiner>
  );
}

export default ForgetPasswordPage;
