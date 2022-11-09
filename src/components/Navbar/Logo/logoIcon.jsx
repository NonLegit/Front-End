import { Box } from '@mui/material';
import LogoText from '../assests/LogoText.svg';
import Logo from '../assests/Logo.svg';

function logoIcon() {
  return (
    <a href="wwww.reddit.com">
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ padding: '8px 8px 8px 0px', display: 'flex', justifyContent: 'center' }}>
          <img alt="" src={Logo} width={32} height={32} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', paddingBottom: '4px' }}>
          <img alt="" src={LogoText} width={57} height={20} />
        </Box>
      </Box>
    </a>
  );
}

export default logoIcon;
