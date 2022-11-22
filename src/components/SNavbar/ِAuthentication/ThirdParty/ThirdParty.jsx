import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { ThirdPartyContainer } from './styles';
import ThirdPartyButton from './ThirdPartyButton/ThirdPartyButton';

import {
  responseGoogleSuccess, responseGoogleFail, responseFacebook,
} from './scripts';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';

function ThirdParty({ circular }) {
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
        clientId={clientId}
        render={(renderProps) => (
          circular ? <h1>Helo</h1>
            : <ThirdPartyButton onClick={renderProps.onClick} img={Google} alt="Google" txt="continue with google" />
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
          circular ? <h1>Helo</h1>
            : <ThirdPartyButton onClick={renderProps.onClick} img={Facebook} alt="Facebook" txt="continue with facebook" />
        )}
      />
    </ThirdPartyContainer>
  );
}

export default ThirdParty;
