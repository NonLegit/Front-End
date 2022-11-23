import { useEffect, useState } from 'react';
import { generateUsername } from 'unique-username-generator';

// mui components
import DoneIcon from '@mui/icons-material/Done';

// services
import axios from '../../../../services/instance';

// styles
import { wrongIcon, rightIcon } from '../../styles';
import theme from '../../../../styles/theme/index';

// Scripts
import { redditCookie } from '../../scripts';
import { redirectHome } from '../../../../utils/Redirect';

// utils
import replaceDashWithUnderScore from '../../../../utils/replaceDashWithUnderScore';
/**
 *
 * check if username length [3-20], if valid username syntax,if username is unique and change state object accordingly
 * @param {string} username  --username to check for
 * @param {sstFunction} setUserName --setFunction for the userName State
 * @returns {void}
 */
export const checkUserNameSignUp = (username, setUserName) => {
  // console.log(username);// New value must be passsed
  // Check Username bwteen 3-20 characters
  if (username.length < 3 || username.length > 20) {
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Username must be between 3 and 20 characters',
    }));
    return;
  }

  // Check Invalid UserName
  if (!/^[A-Za-z0-9_-]*$/.test(username)) {
    // console.log('invalid');
    setUserName((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'Letters, numbers, dashes, and underscores only. Please try again without symbols.',
    }));
    return;
  }

  // Check Unique Username
  axios.get(`/users/username_available?userName=${username}`).then((response) => {
    if (response.status === 200) {
      if (response.data.available === true) {
        // Unique
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.primary.main,
          icon: rightIcon,
          error: null,
        }));
      } else {
        // Repeated
        setUserName((prevState) => ({
          ...prevState,
          color: theme.palette.error.main,
          icon: wrongIcon,
          error: 'That username is already taken.',
        }));
      }
    }
  }).catch((error) => {
    console.log(error);
  });
};

/**
 *
 * SignUp new User Function  if there is no a problem with the fields and verification the API is called
 * else not
 * Check for the Password Strength
 * Check if Verified to continue SignUp
 * @param {object} email --email object to signup with
 * @param {object} userName --userName object to signup with
 * @param {object} password --password object to signup with
 * @param {setFunction} setPassword --setfunction for the password
 * @param {state} verified --bool if verified by the Captcha
 * @param {setfunction} setLoading --setfunction for the Laoding state of the button
 * @param {setfunction} setButtonText --setfunction for the Button Text
 * @param {setfunction} setDisabled --setfunction for the setting Button Disabled or Enabled
 * @param {setfunction} setRedirectCaption --setfunction for the Caption in SignUp Page
 * @returns {void}
 */
export const signUp = (
  email,
  userName,
  setuserName,
  password,
  setPassword,
  verified,
  setLoading,
  setButtonText,
  setDisabled,
  setRedirectCaption,
  setCookies,
) => {
  // console.log(email);
  // console.log(userName);// true value but case no change wrong value
  // console.log(password);// true value but case no change wrong value
  setLoading(true);

  // check if there is any errors
  if (userName.error != null || password.error != null) {
    setLoading(false);
    return;
  }

  // check if Empty (case he didn't make any change in the input field)
  if (userName.input === '' || password.input === '') {
    setLoading(false);
    return;
  }

  // Weak Password
  if (password.score < 2) {
    setPassword((prevState) => ({
      ...prevState,
      color: theme.palette.error.main,
      icon: wrongIcon,
      error: 'This Password isn\'t acceptable',
    }));
    setLoading(false);
    return;
  }

  // check if verified
  if (!verified) {
    setLoading(false);
    return;
  }
  // SignUpEndPoint
  axios.post('/users/signup', {
    // console.log(userName.input, password.input, email.input);
    userName: userName.input,
    email: email.input,
    password: password.input,
  }).then((response) => {
    setLoading(false);
    if (response.status === 201 || response.status === 200) {
      setButtonText(<DoneIcon />);
      setDisabled(true);
      setRedirectCaption(true);
      // Add Reddit Cookie
      redditCookie(setCookies);
      redirectHome(1000);
    } else {
      console.log('Error');
    }
  }).catch((error) => {
    if (error.response.data.errorType === 1) {
      setLoading(false);
      // weak password
      setPassword((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'This Password isn\'t acceptable',
      }));
    } else if (error.response.data.errorType === 2) {
      setLoading(false);
      // repeated mail or username but for our logic it is only email
      // Repeated
      setuserName((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'That user already exists.',
      }));
    }
    console.log(error);
  });
};
/**
 * This function works as a server for generating random usernames
 *
 * @function generateRandomUsernamesServer
 * @param {number} numberOfGeneratedUsernames - the maximum number of random usernames to be generated
 * @param {React.State} deps - the dependencies on which random usernames generated
 * @returns {Array.<string>} generated usernames
 */
export const generateRandomUsernamesServer = (numberOfGeneratedUsernames, deps) => {
  const [generatedUsernames, setGeneratedUsernames] = useState(null);
  useEffect(() => {
    (async () => {
      let counter = 0;
      const temp = [];
      do {
        let error = '';
        const username = replaceDashWithUnderScore(generateUsername());
        const response = await axios.get('/users/username_available', {
          params: {
            userName: username,
          },
        }).catch((e) => {
          error = e;
        });
        const { data, status: statusCode } = response;
        if (error) {
          setGeneratedUsernames(['something went wrong']);
          return;
        }

        if (statusCode === 400) {
          const { message } = data;
          setGeneratedUsernames([message]);
          return;
        }

        if (data.available === true) {
          // unique
          counter += 1;
          temp.push(username);
        }
      } while (counter < numberOfGeneratedUsernames);
      // console.log(temp);
      setGeneratedUsernames(temp);
    })();
  }, [deps]);
  return generatedUsernames;
};

export default generateRandomUsernamesServer;
