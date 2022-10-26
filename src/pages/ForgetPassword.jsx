import { AuthenticationConatiner, AuthenticationBG, AuthenticationBody } from '../components/Authentication/AuthenticationConatiners/styles';
import ForgetPasswordFirstParty from '../components/Authentication/ForgetPassword/ForgetPasswordFirstParty/ForgetPasswordFirstParty';
import ForgetPasswordTitle from '../components/Authentication/ForgetPassword/ForgetPasswordTitle/ForgetPasswordTitle';

function ForgetPassword() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <AuthenticationBody>
        <div style={{ margin: 'auto 0px' }}>
          <ForgetPasswordTitle />
          <ForgetPasswordFirstParty />
        </div>
      </AuthenticationBody>
    </AuthenticationConatiner>
  );
}

export default ForgetPassword;
