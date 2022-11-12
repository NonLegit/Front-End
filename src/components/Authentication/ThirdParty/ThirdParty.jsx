// Google and Facebook Service components
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// scripts
import {
  responseGoogleSuccess, responseGoogleFail, responseFacebook,
} from './scripts';

// styles
import { ThirdPartyContainer } from './styles';
import ThirdPartyButton from './ThirdPartyButton/ThirdPartyButton';

import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';

/**
 * Third Party [Google and Facebook] Components
 *  @component
 * @returns {React.Component} - Continue with google and Facebook
 */
function ThirdParty() {
  // Google
  const googleClientId = '374002806091-7pces2dv4vr0vb8lchmputreqnlalqes.apps.googleusercontent.com';
  const initClient = () => {
    gapi.auth2.init({
      clientId: googleClientId,
      scope: '',
    });
  };
  gapi.load('client:auth2', initClient);

  // Facebook
  const facebookAppId = '1217433968834337';

  return (
    <ThirdPartyContainer>
      <GoogleLogin
        clientId={googleClientId}
        render={(renderProps) => (
          <ThirdPartyButton onClick={renderProps.onClick} img={Google} alt="Google" txt="continue with google" />
        )}
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFail}
        cookiePolicy="single_host_origin"
        testid="google-btn-test"
      />
      <FacebookLogin
        appId={facebookAppId}
        callback={responseFacebook}
        render={(renderProps) => (
          <ThirdPartyButton onClick={renderProps.onClick} img={Facebook} alt="Facebook" txt="continue with facebook" />
        )}
      />
    </ThirdPartyContainer>
  );
}

export default ThirdParty;
