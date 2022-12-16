import { useEffect } from 'react';

// mui components
import { Typography } from '@mui/material';

// componenets
import AuthenticationHeader from '../AuthenticationHeader/AuthenticationHeader';

// scripts
import { redirectHome } from '../../../utils/Redirect';

// styles
import { StyledLink } from '../styles';

/**
 * Loading Page Component
 * @returns {React.Component} - Main Body of Loading Page
 */
function LoadingPage() {
  // effect
  useEffect(() => {
    redirectHome(1000);
  }, []);

  const caption = (
    <>
      <Typography paragraph fontSize={15}>
        You are already logged in and will be redirected back to Reddit shortly.
      </Typography>
      <Typography paragraph fontSize={15}>
        If you are not redirected automatically, follow
        {' '}
        <StyledLink onClick={() => { redirectHome(200); }} href="#" fontWeight="400" fontSize={14}>this link</StyledLink>
        .
      </Typography>
    </>
  );
  return (
    <AuthenticationHeader reddit title="Welcome back!" caption={caption} fontSize="14px" />
  );
}

export default LoadingPage;
