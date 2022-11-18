import { Outlet } from 'react-router-dom';
import SettingsHeader from '../components/Settings/SettingsHeader/SettingsHeader';
import { SettingsContiner } from '../components/Settings/SettingsHeader/style';

function Settings() {
  return (
    <SettingsContiner>
      <SettingsHeader />
      <Outlet />
    </SettingsContiner>
  );
}

export default Settings;
