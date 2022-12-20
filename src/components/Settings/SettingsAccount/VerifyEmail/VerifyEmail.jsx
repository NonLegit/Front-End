/* eslint-disable jsx-a11y/alt-text */
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
    // console.log('herrrrrrrrrrrr');
    // Call BE
    checkEmailToken(token, setverified);
  }, []);
  return (
    <Box>
      { verified === 'Error' ? <img src="https://s.clipartkey.com/mpngs/s/192-1921872_of-way-eighth-shield-shield-street-sign-risk.png" alt="Unverified" /> : null }
    </Box>
  );
}

export default VerifyEmail;
