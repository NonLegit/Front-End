import { useMediaQuery, useTheme } from '@mui/material';
import { SideBarContainer } from './styles';

function SideBar() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  if (match) { return null; }
  return (
    <SideBarContainer>
      adham
    </SideBarContainer>
  );
}

export default SideBar;
