import { AuthenticationConatiner, AuthenticationBG, AuthenticationBody } from '../components/Authentication/AuthenticationConatiners/styles';
import ForgetUsernameFirstParty from '../components/Authentication/ForgetUsername/ForgetUsernameFirstParty/ForgetUsernameFirstParty';
import ForgetUsernameTitle from '../components/Authentication/ForgetUsername/ForgetUsernameTitle/ForgetUsernameTitle';

function ForgetUsername() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <AuthenticationBody>
        <div style={{ margin: 'auto 0px' }}>
          <ForgetUsernameTitle />
          <ForgetUsernameFirstParty />
        </div>
      </AuthenticationBody>
    </AuthenticationConatiner>
  );
}

export default ForgetUsername;
