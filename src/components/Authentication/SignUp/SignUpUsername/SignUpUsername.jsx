import { useEffect, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import ReCAPTCHA from 'react-google-recaptcha';
import UpdateIcon from '@mui/icons-material/Update';
import {
  BackLink,
  Body, ChooseUsernameContainer, Footer, Header, SuggestionBox, SuggestLink, TopBox,
} from './styles';
import {
  FirstPartyContainer, RedditTextField,
  rightIcon, RedditLoadingButton,
} from '../../styles';
import {
  refreshUsernames, checkUserName, checkPassword, signUp,
} from '../../scripts';
import theme, { fonts } from '../../../../styles/theme';

/**
 * SignUp Username and Password Component
 * @returns {React.Component} -set username ans password, Suggest username, Check I am not a robot
 */
function SignUpUsername({ setUserNamePage, email }) {
  const [userNames, setUserNames] = useState([]);

  const [userName, setUserName] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null, score: 0,
  });
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [buttonTxt, setButtonText] = useState('Sign up');

  useEffect(() => {
    refreshUsernames(setUserNames);
  }, []);

  return (
    <ChooseUsernameContainer data-testid="signup-username-test">
      <Header>
        <Typography variant="h1" fontSize={18} fontWeight={700} fontFamily="ibm-plex-sans,sans-serif" marginBottom="10px">
          {/* Modify this font to be in the theme */}
          Choose your username
        </Typography>
        <Typography fontSize={14}>
          Your username is how other community members will see you. This name will be used to
          {' '}
          credit you for things you share on Reddit. What should we call you?
        </Typography>
      </Header>
      <Body>
        <FirstPartyContainer width="350px" mnwidth="200px">
          <RedditTextField
            label="Choose a username"
            variant="filled"
            required
            value={userName.input}
            InputProps={{
              endAdornment: (
                userName.icon
              ),
              disableUnderline: true,
            }}
            clr={userName.color}
            onChange={(e) => {
              checkUserName(e.target.value.trim(), setUserName);
              setUserName((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }));
            }}
            data-testid="username-signup-field-test"
            helperText={userName.error}
          />

          <PasswordStrengthBar
            password={password.input}
            minLength={4}
            onChangeScore={(e) => setPassword((
              prevState,
            ) => ({ ...prevState, score: e }))}
            scoreWords={[]}
            shortScoreWord=""
          />
          <RedditTextField
            label="password"
            variant="filled"
            required
            value={password.input}
            InputProps={{
              endAdornment: (
                password.icon
              ),
              disableUnderline: true,
            }}
            clr={password.color}
            onChange={(e) => {
              checkPassword(e.target.value.trim(), setPassword);
              setPassword((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }));
            }}
            helperText={password.error}
            data-testid="password-signup-field-test"
          />
          <ReCAPTCHA
            sitekey="6LdjH-kiAAAAANFbV6SUnCjXNK3Z0h7q7j4IFf7i"
            onExpired={() => setVerified(false)}
            onChange={() => setVerified(true)}
            size="normal"
            sx={{ width: '320px' }}
          />
        </FirstPartyContainer>
        <SuggestionBox>
          <TopBox>
            <Typography variant="p" fontSize={14}>
              Here are some username suggestions
            </Typography>
            <IconButton aria-label="delete" color="primary" onClick={refreshUsernames}>
              <UpdateIcon />
            </IconButton>
          </TopBox>
          {userNames ? (userNames.map((i) => (
            <SuggestLink
              key={i}
              onClick={() => setUserName((prevState) => ({
                ...prevState,
                color: theme.palette.primary.main,
                icon: rightIcon,
                error: null,
                input: i,
              }))}
              href="#"
              helperText={password.error}
              data-testid={`suggest-username-${i}-test`}
            >
              {i}
            </SuggestLink>
          ))) : null}
        </SuggestionBox>
      </Body>
      {redirectCaption
        ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="auto">You are now logged in. You will soon be redirected</Typography>
        : null}
      <Footer>
        <BackLink onClick={() => setUserNamePage(false)} href="#">Back</BackLink>
        <RedditLoadingButton
          type="submit"
          width="155px"
          onClick={() => signUp(
            setLoading,
            userName,
            password,
            setPassword,
            email,
            verified,
            setButtonText,
            setRedirectCaption,
          )}
          loading={loading}
          data-testid="sigup-btn-test"
        >
          {buttonTxt}
        </RedditLoadingButton>
      </Footer>
    </ChooseUsernameContainer>
  );
}
export default SignUpUsername;
