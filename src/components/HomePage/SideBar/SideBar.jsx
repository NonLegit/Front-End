import { useMediaQuery, useTheme } from '@mui/material';
import Communities from '../Communities/Communities';
import { SideBarContainer } from './styles';

function SideBar() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  if (match) { return null; }
  return (
    <SideBarContainer>
      <Communities />
    </SideBarContainer>
  );
}

export default SideBar;
