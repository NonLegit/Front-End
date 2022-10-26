import { AuthenticationConatiner, AuthenticationBG, AuthenticationBody } from '../components/Authentication/AuthenticationConatiners/styles';
import ResetPasswordFirstParty from '../components/Authentication/ResetPassword/ReserPasswordFirstParty/ResetPasswordFirstParty';
import ResetPasswordTitle from '../components/Authentication/ResetPassword/ResetPasswordTitle/ResetPasswordTitle';

function ResetPassword() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <AuthenticationBody>
        <div style={{ margin: 'auto 0px' }}>
          <ResetPasswordTitle />
          <ResetPasswordFirstParty />
        </div>
      </AuthenticationBody>
    </AuthenticationConatiner>
  );
}

export default ResetPassword;
