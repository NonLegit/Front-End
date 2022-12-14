import { redirectHome } from '../../../utils/Redirect';
import axios from '../../../services/instance';
import { redditCookie } from '../scripts';
/**
 * If Valid Token Then user is Logged in and redirected to the homepage
 * @param {JsonResponse} googleResponse --Google Response
 * @param {setFunction} setCookies --add Cookies
 * @return {void}
 */
export const responseGoogleSuccess = (googleResponse, setCookies) => {
  console.log('Google', googleResponse);
  axios.post('/users/google', { tokenId: googleResponse.tokenId }).then((response) => {
    if (response.status === 200 || response.status === 201) {
      // success
      // Add Reddit Cookie
      redditCookie(setCookies);
      redirectHome(1000);
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      // ==>"status": "fail",
      // ==>"message": "Token is invalid or has expired"
      console.log(error);
    }
  });
};

/**
 *
 * @param {JsonResponse} googleResponse --Google Response
 */
export const responseGoogleFail = (googleResponse) => {
  console.log('Error When Connecting to Google', googleResponse);
};

/**
 *
 * @param {JsonResponse} facebookResponse --Fcaebook Response
 * @param {setFunction} setCookies --add Cookies* @return If Valid Token Then user is Logged in and redirected to the homepage
 */
export const responseFacebook = (facebookResponse, setCookies) => {
  console.log('FaceBook', facebookResponse);
  axios.post('/users/facebook', { access_token: facebookResponse.accessToken }).then((response) => {
    if (response.status === 200 || response.status === 201) {
      // success
      // Add Reddit Cookie
      redditCookie(setCookies);
      redirectHome(1000);
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      // ==>"status": "fail",
      // ==>"message": "Token is invalid or has expired"
      console.log(error);
    }
  });
};
