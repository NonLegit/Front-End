import { useEffect, useState } from 'react';

// mui components
import { IconButton, Typography } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

// Components
import PasswordStrengthBar from 'react-password-strength-bar';
import ReCAPTCHA from 'react-google-recaptcha';

// styles
import {
  BackLink, Body, ChooseUsernameContainer, Footer, Header, SuggestionBox, SuggestLink, TopBox,
} from './styles';
import {
  FirstPartyContainer, RedditTextField, rightIcon, RedditLoadingButton,
} from '../../styles';
// scripts
import {
  refreshUsernames, checkUserName, checkPassword, signUp,
} from '../../scripts';
import theme, { fonts } from '../../../../styles/theme';

/**
 * SignUp Username and Password Page View
 *
 * @component
 * @property {SetFunction} --setUserNamePage setView to Email Page on Back Button Click
 * @property {object} --email setView to Email Page on Back Button Click
 * @property {object} --userName userName to SignUp with
 * @property {function} --setUserName to set UserName
 * @property {object} --password password to SignUp with
 * @property {function} --setPassword to set password
 * @returns {React.Component} UserName and Password Form
 */
function SignUpUsername({
  setUserNamePage, email, userName, setUserName, password, setPassword, setCookies,
}) {
  // states
  const [defaultUserNameValue, setdefaultUserNameValue] = useState(userName?.input);
  const [defaultPasswordValue, setdefaultPasswordValue] = useState(password?.input);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonTxt, setButtonText] = useState('Sign up');
  const [disabled, setDisabled] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  const [userNames, setUserNames] = useState([]);

  // useEffecct
  useEffect(() => {
    refreshUsernames(setUserNames);
  }, []);

  const signUpFunction = () => {
    checkUserName(userName?.input, setUserName);
    checkPassword(password?.input, setPassword, password);
    signUp(email, userName, password, setPassword, verified, setLoading, setButtonText, setDisabled, setRedirectCaption, setCookies);
  };

  return (
    <ChooseUsernameContainer data-testid="signup-username-test">
      <Header>
        <Typography variant="h1" fontSize={18} fontWeight={700} fontFamily="ibm-plex-sans,sans-serif" marginBottom="10px">
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
            InputProps={{
              endAdornment: (
                userName?.icon
              ),
              disableUnderline: true,
            }}
            clr={userName?.color}
            onChange={(e) => {
              setUserName((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }));
              checkUserName(e.target.value.trim(), setUserName);
              setdefaultUserNameValue(e.target.value.trim());
            }}
            value={defaultUserNameValue || ''}
            data-testid="username-signup-field-test"
            helperText={userName?.error}
          />
          <PasswordStrengthBar
            password={password?.input}
            minLength={4}
            onChangeScore={(e) => (setPassword((prevState) => ({
              ...prevState,
              score: e,
            })))}
            scoreWords={[]}
            shortScoreWord=""
          />
          <RedditTextField
            label="password"
            variant="filled"
            required
            InputProps={{
              endAdornment: (
                password?.icon
              ),
              disableUnderline: true,
            }}
            clr={password?.color}
            onChange={(e) => {
              setPassword((prevState) => ({
                ...prevState,
                input: e.target.value.trim(),
              }));
              checkPassword(e.target.value.trim(), setPassword, undefined);
              setdefaultPasswordValue(e.target.value.trim());
            }}
            value={defaultPasswordValue || ''}
            helperText={password?.error}
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
              onClick={() => {
                setUserName((prevState) => ({
                  ...prevState,
                  color: theme.palette.primary.main,
                  icon: rightIcon,
                  error: null,
                  input: i,
                }));
                setdefaultUserNameValue(i);
              }}
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
        <BackLink onClick={() => { if (disabled) return; setUserNamePage(false); }} href="#">Back</BackLink>
        <RedditLoadingButton
          width="155px"
          onClick={signUpFunction}
          loading={loading}
          disabled={disabled}
          data-testid="sigup-btn-test"
        >
          {buttonTxt}
        </RedditLoadingButton>
      </Footer>
    </ChooseUsernameContainer>
  );
}
export default SignUpUsername;
