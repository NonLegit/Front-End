import { IconButton, Typography, Button } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useState } from 'react';
import { AuthenticationButton, FirstPartyContainer, AuthenticationInput } from '../styles';
import {
  Body, ChooseUsernameContainer, Footer, Header, SuggestionBox, TopBox,
} from './styles';

function SignUpUsername({ setUsernamePage }) {
  const [userNames, setUserNames] = useState([]);

  const refreshUsernames = () => {
    setUserNames(['Basma', 'Ali']);
    console.log('pressed');
  };

  const setUserNameSuggest = () => {
    console.log('You choose a sugessted username it  must be loaded to the input filed');
  };

  const signUp = () => {
    console.log('Sign up');
  };

  const back = () => {
    setUsernamePage(false);
  };
  return (
    <ChooseUsernameContainer>
      <Header>
        <Typography variant="h1" fontSize={18} fontWeight={700} fontFamily="ibm-plex-sans,sans-serif" marginBottom="10px">
          {/* Modify this font to be in the theme */}
          Choose your username
        </Typography>
        <Typography>
          Your username is how other community members will see you. This name will be used to
          {' '}
          credit you for things you share on Reddit. What should we call you?
        </Typography>
      </Header>
      <Body>
        <FirstPartyContainer width="350px" mnwidth="200px">
          <AuthenticationInput label="USERNAME" variant="outlined" />
          <AuthenticationInput label="PASSWORD" variant="outlined" />
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
            <Button variant="text" key={i} onClick={setUserNameSuggest}>{i}</Button>
          ))) : null}
        </SuggestionBox>
      </Body>

      <Footer>
        <AuthenticationButton width="155px" margin="5px" onClick={back}>Back</AuthenticationButton>
        <AuthenticationButton type="submit" width="155px" margin="5px" onClick={signUp}>sign up</AuthenticationButton>
      </Footer>
    </ChooseUsernameContainer>
  );
}

export default SignUpUsername;
