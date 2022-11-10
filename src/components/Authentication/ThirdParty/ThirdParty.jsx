import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { ThirdPartyContainer } from './styles';
import ThirdPartyButton from './ThirdPartyButton/ThirdPartyButton';

import {
  responseGoogleSuccess, responseGoogleFail, responseFacebook,
} from './scripts';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';

/**
 * Third Party Component
 * @returns {React.Component} - Continue with google and Facebook
 */
function ThirdParty() {
  const clientId = '374002806091-7pces2dv4vr0vb8lchmputreqnlalqes.apps.googleusercontent.com';

  // Facebook
  const initClient = () => {
    gapi.auth2.init({
      clientId,
      scope: '',
    });
  };
  gapi.load('client:auth2', initClient);
  return (
    <ThirdPartyContainer>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <ThirdPartyButton onClick={renderProps.onClick} img={Google} alt="Google" txt="continue with google" />
        )}
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFail}
        cookiePolicy="single_host_origin"
        testid="google-btn-test"
      />
      <FacebookLogin
        appId="1217433968834337"
        callback={responseFacebook}
        render={(renderProps) => (
          <ThirdPartyButton onClick={renderProps.onClick} img={Facebook} alt="Facebook" txt="continue with facebook" />
        )}
      />
    </ThirdPartyContainer>
  );
}

export default ThirdParty;
