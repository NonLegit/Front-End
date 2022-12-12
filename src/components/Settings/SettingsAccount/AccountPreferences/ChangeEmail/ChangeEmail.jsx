import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { EmailFormat } from '../../../../../utils/checkEmail';
import theme from '../../../../../styles/theme';
import {
  IconClose, Header, HeaderIcon, IconError, Container,
  Pragraph, Input, Footer, SaveBtn, Error,
} from './styles';

function ChangeEmail({ setOpenEmail }) {
  const [condition, setCondition] = useState(false);
  const [checkEamil, setCheckEamil] = useState(false);
  const [error, setError] = useState(false);
  const [pass, setPass] = useState('');
  const [email, setEamil] = useState('');
  useEffect(() => {
    if (pass.length > 0 && checkEamil) {
      setCondition(true);
      console.log('saa');
    } else {
      setCondition(false);
    }
  }, [pass, email, checkEamil]);
  const checkSubmission = () => {
    console.log(pass);
    console.log(email);
  };
  return (
    <Container>
      <Header>
        <HeaderIcon>
          <EmailIcon fontSize="large" color="primary" />
          <IconError>
            <PriorityHighIcon fontSize="small" color={theme.palette.neutral.main} />
          </IconError>
        </HeaderIcon>
        Update your email
        <IconClose
          aria-label="close"
          onClick={() => {
            setOpenEmail(false);
            setPass('');
            setEamil('');
            setCheckEamil(false);
            setError(false);
            setCondition(false);
          }}
        >
          <CloseIcon />
        </IconClose>

      </Header>
      <Pragraph>Update your email below. There will be a new verification email sent that you will need to use to verify this new email.</Pragraph>
      <Box>
        <Input
          value={pass}
          onChange={(e) => {
            setPass(e.currentTarget.value.trim());
          }}
          placeholder="CURRENT PASSWORD"
        />
      </Box>
      <Box>
        <Input
          error={error}
          value={email}
          onChange={(e) => {
            setEamil(e.currentTarget.value.trim());
            if (EmailFormat(e.currentTarget.value.trim())) {
              setCheckEamil(true);
            } else {
              setCheckEamil(false);
            }
          }}
          onBlur={() => {
            setError(!checkEamil);
          }}
          placeholder="NEW EMAIL"
        />
      </Box>
      {
              error && (
              <Error>
                Please enter a valid email
              </Error>
              )
          }
      <Footer>
        <SaveBtn variant="contained" condition={condition} onClick={() => checkSubmission()}>Save email</SaveBtn>
      </Footer>
    </Container>
  );
}

export default ChangeEmail;
