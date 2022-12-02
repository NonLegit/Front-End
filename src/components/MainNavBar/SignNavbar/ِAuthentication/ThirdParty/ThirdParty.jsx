import { useCookies } from 'react-cookie';

// Google and Facebook Service components
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// server
import {
  responseGoogleSuccess, responseGoogleFail, responseFacebook,
} from '../../../../Authentication/ThirdParty/thirdpartyServer';

// styles
import { ThirdPartyContainer } from './styles';
import ThirdPartyButton from './ThirdPartyButton/ThirdPartyButton';

import Google from '../../../../../assets/images/google.png';
import Facebook from '../../../../../assets/images/facebook.png';

// environment variables
const { REACT_APP_GOOGLECLIENTID, REACT_APP_FACEBOOKCLIENTID } = process.env;

function ThirdParty({ circular }) {
  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  const googleClientId = REACT_APP_GOOGLECLIENTID;
  const initClient = () => {
    gapi.auth2.init({
      clientId: googleClientId,
      scope: '',
    });
  };
  gapi.load('client:auth2', initClient);

  // Facebook
  const facebookAppId = REACT_APP_FACEBOOKCLIENTID;

  return (
    <ThirdPartyContainer>
      <GoogleLogin
        clientId={googleClientId}
        render={(renderProps) => (
          circular ? <h1>Helo</h1>
            : <ThirdPartyButton onClick={renderProps.onClick} img={Google} alt="Google" txt="continue with google" />
        )}
        onSuccess={(googleResponse) => responseGoogleSuccess(googleResponse, setCookies)}
        onFailure={responseGoogleFail}
        cookiePolicy="single_host_origin"
        testid="google-btn--popup"
      />
      <FacebookLogin
        appId={facebookAppId}
        callback={(facebookResponse) => responseFacebook(facebookResponse, setCookies)}
        render={(renderProps) => (
          circular ? <h1>Helo</h1>
            : <ThirdPartyButton onClick={renderProps.onClick} img={Facebook} alt="Facebook" txt="continue with facebook" />
        )}
      />
    </ThirdPartyContainer>
  );
}

export default ThirdParty;
