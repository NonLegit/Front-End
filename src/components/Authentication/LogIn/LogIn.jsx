import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import {
  AuthenticationBody, FirstPartyContainer, StyledLink, wrongIcon,
  rightIcon, RedditTextField, RedditLoadingButton,
} from '../styles';
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';
import { ThirdPartyContainer } from '../ThirdPartyButton/styles';
import ThirdPartyButton from '../ThirdPartyButton/ThirdPartyButton';
import Divider from '../Divider/Divider';

import LoadingPage from '../LoadingPage/LoadingPage';
import theme, { fonts } from '../../../styles/theme';

import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';

function LogIn() {
  const [remeberMe, setRemeberMe] = useState(false);

  const [buttonTxt, setButtonText] = useState('Log In');
  const [userNameState, setuserNameState] = useState({
    Value: false, Error: '', color: theme.palette.neutral.main,
  });
  const [passwordState, setpasswordState] = useState({
    Value: false, color: theme.palette.neutral.main,
  });
  const [userNameIcon, setUserNameIcon] = useState(null);
  const [passwordIcon, setPasswordIcon] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtonText('Log in');
    const item = localStorage.getItem('Reddit_user');
    if (item != null) {
      setRemeberMe(true);
      setTimeout(() => {
        window.location.href = './';
      }, 1000);
    }
  }, []);

  const caption = (
    <>
      By continuing, you agree to our
      {' '}
      <StyledLink fontWeight="400" href="https://www.redditinc.com/policies/user-agreement" capital="none">User Agreement</StyledLink>
      {' '}
      and
      {' '}
      <StyledLink fontWeight="400" href="https://www.reddit.com/policies/privacy-policy" capital="none">Privacy Policy </StyledLink>
      .
    </>
  );

  const logIn = async (event) => {
    event.preventDefault();
    console.log(password);

    console.log(userName);
    // Verify UserName and Password API
    setLoading(true);
    setUserNameIcon(null);
    setuserNameState({ Value: false, Error: '', color: theme.palette.neutral.main });
    setPasswordIcon(null);
    setpasswordState({ Value: false, color: theme.palette.neutral.main });

    // Validate User Name
    if (userName.length < 3 || userName.length > 20) {
      setuserNameState({ Value: true, Error: 'Username must be between 3 and 20 characters' });
    }
    // Delay just for loading API(Will be Remove Later :))
    setTimeout(() => {
      // 1.Afetr response of API has arrived
      setLoading(false);

      // 2.Sucessfull login
      if (userName === 'Basma' && password === '123') {
        setButtonText(<DoneIcon />);
        setRedirectCaption(true);
        setTimeout(() => {
          // Add to the local stroage
          localStorage.setItem('Reddit_user', JSON.stringify({ userName, password }));
          window.location.href = '/';
        }, 1000);
      } else {
        // 3.Falied Login
        setuserNameState({
          Value: true, Error: 'Incorrect username or password', color: theme.palette.error.main,
        });
        setpasswordState({ Value: true, color: theme.palette.error.main });
        setUserNameIcon(wrongIcon);
        setPasswordIcon(wrongIcon);
      }
    }, 1000);
  };

  const checkUserName = (e) => {
    const name = e.target.value.trim();
    if (name.length < 3 || name.length > 20) {
      setuserNameState({
        Value: true, Error: 'Username must be between 3 and 20 characters', color: theme.palette.error.main,
      });
      setUserNameIcon(wrongIcon);
    } else {
      setuserNameState({ Value: false, Error: '', color: theme.palette.primary.main });
      setUserNameIcon(rightIcon);
    }
    setUserName(name);
  };

  return (
    <AuthenticationBody mnwidth="290px" mxwidth={remeberMe ? '440px' : '290px'}>
      {remeberMe ? <LoadingPage /> : (
        <>
          <AuthenticationHeader reddit={false} title="Log in" caption={caption} />
          <ThirdPartyContainer>
            <ThirdPartyButton img={Google} alt="Google" txt="continue with google" />
            <ThirdPartyButton img={Facebook} alt="Facebook" txt="continue with facebook" />
          </ThirdPartyContainer>
          <Divider />
          <FirstPartyContainer width="290px" onSubmit={logIn}>
            <RedditTextField
              label="Username"
              variant="filled"
              type="text"
              required
              InputProps={{
                endAdornment: (
                  userNameIcon
                ),
                disableUnderline: true,
              }}
              clr={userNameState.color}
              onBlur={checkUserName}
            />
            {userNameState.Value ? <Typography color="error" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="-5px 0px 10px 2px">{userNameState.Error}</Typography>
              : null}
            <RedditTextField
              label="Password"
              variant="filled"
              type="password"
              required
              InputProps={{
                endAdornment: (
                  passwordIcon
                ),
                disableUnderline: true,
              }}
              clr={passwordState.color}
              onBlur={(e) => setPassword(e.target.value)}
            />
            <RedditLoadingButton type="submit" loading={loading}>
              {buttonTxt}
            </RedditLoadingButton>
            {redirectCaption
              ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="10px 0px">You are now logged in. You will soon be redirected</Typography>
              : null}
            <Typography paragraph fontSize="12px" fontFamily="ibm-plex-sans,sans-serif">
              Forgot your
              {' '}
              <StyledLink href="/username" fontWeight="400" capital="none">username</StyledLink>
              {' or '}
              <StyledLink href="/password" fontWeight="400" capital="none">password</StyledLink>
              {' ?'}
            </Typography>

          </FirstPartyContainer>

          <Typography paragraph fontSize={12}>
            New to Reddit?
            {' '}
            <StyledLink href="/register" fontWeight="600" capital="uppercase">sign up</StyledLink>
          </Typography>
        </>
      )}
    </AuthenticationBody>
  );
}

export default LogIn;
