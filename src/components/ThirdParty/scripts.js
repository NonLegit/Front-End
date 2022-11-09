import axios from 'axios';
/* Google Authentication */
export const responseGoogleSuccess = (googleResponse) => {
  axios.post(
    'https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/google/1',
    {
      acess_Token: googleResponse.accessToken,
    },
  ).then((response) => {
    if (response.status === 200) {
      window.location.href = './';
    } else {
      // 400 expired
      alert(response.data.message);
    }
  });
};

export const responseGoogleFail = (response) => {
  alert('Error When connecting to Google');
  console.log(response);
};

/* FaceBook Authentication */
export const responseFacebook = (facebookResponse) => {
  console.log('FaceBook', facebookResponse);
  axios.post(
    'https://abf8b3a8-af00-46a9-ba71-d2c4eac785ce.mock.pstmn.io/users/facebook/1',
    {
      acess_Token: facebookResponse.accessToken,
    },
  ).then((response) => {
    if (response.status === 200) {
      window.location.href = './';
    } else {
      // 400 expired
      alert(response.data.message);
    }
  });
};
