import axios from 'axios';
/**
 * @param {JsonResponse} googleResponse
 * @return If Valid Token Then user is Logged in and redirected to the homepage
 */
export const responseGoogleSuccess = (googleResponse) => {
  axios.post(
    'https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/google/1',
    {
      tokenId: googleResponse.tokenId,
    },
  ).then((response) => {
    if (response.status === 200 || response.status === 201) {
      window.location.href = './';
    }
  }).catch((error) => {
    console.log(error);
  });
};

export const responseGoogleFail = (googleResponse) => {
  console.log('Error When Connecting to Google', googleResponse);
};

/**
 *
 * @param {Json Response} facebookResponse
 * @return If Valid Token Then user is Logged in and redirected to the homepage
 */
export const responseFacebook = (facebookResponse) => {
  console.log('FaceBook', facebookResponse);
  axios.post(
    'https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/facebook/1',
    {
      access_Token: facebookResponse.accessToken,
    },
  ).then((response) => {
    if (response.status === 200 || response.status === 20) {
      window.location.href = './';
    }
  }).catch((error) => {
    console.log(error);
  });
};
