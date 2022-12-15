import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ModBox, ModMainPage } from './styles';

function ModerationMainPage() {
  const { subReddit } = useParams();
  return (
    <ModMainPage>
      <ModBox>
        <AdminPanelSettingsIcon fontSize="large" color="action" />
        <Typography sx={{ marginTop: 2 }}>
          Welcome to the mod tools for r/
          {subReddit}
        </Typography>
      </ModBox>
    </ModMainPage>
  );
}

export default ModerationMainPage;
