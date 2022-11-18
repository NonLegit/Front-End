import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoText from '../assests/LogoText.svg';
import Logo from '../assests/Logo.svg';
/**
 * LogoIcon
 * @component
 * Both of the logo and word are hyperlinks to the homepage.
 * @returns {React.Component} logo and nonlegit word beside it.
 */
function LogoIcon() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ padding: '8px 8px 8px 0px', display: 'flex', justifyContent: 'center' }}>
          <img alt="" src={Logo} width={32} height={32} />
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', paddingBottom: '4px' }}>
          <img alt="" src={LogoText} width={57} height={20} />
        </Box>
      </Box>
    </Link>
  );
}

export default LogoIcon;
