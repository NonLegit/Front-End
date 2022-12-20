import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { checkEmailToken } from './verifyEmailServer';

function VerifyEmail() {
  // useParams
  const { token } = useParams();

  // useState
  const [verified, setverified] = useState('unVerfied');

  useEffect(() => {
    console.log('herrrrrrrrrrrr');
    // Call BE
    setverified(checkEmailToken(token));
  }, []);
  return (
    <Box>
      <p>{verified}</p>
      {verified === 'Error' ? <h1>Errooooo</h1> : null}
    </Box>
  );
}

export default VerifyEmail;
