import { AuthenticationConatiner, AuthenticationBG, AuthenticationBody } from '../components/Authentication/AuthenticationConatiners/styles';
import SignUpFirstParty from '../components/Authentication/SignUp/SignUpFirstParty/SignUpFirstParty';
import SignUpThirdParty from '../components/Authentication/SignUp/SignUpThirdParty/SignUpThirdParty';
import SignUpTitle from '../components/Authentication/SignUp/SignUpTitle/SignUpTitle';

import Divider from '../components/Authentication/Divider/Divider';

function Signup() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <AuthenticationBody>
        <SignUpTitle />
        <SignUpThirdParty />
        <Divider />
        <SignUpFirstParty />
      </AuthenticationBody>
    </AuthenticationConatiner>
  );
}

export default Signup;
