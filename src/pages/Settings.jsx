import { Outlet } from 'react-router-dom';
import { positions, Provider } from 'react-alert';

import SettingsHeader from '../components/Settings/SettingsHeader/SettingsHeader';
import { SettingsContiner } from '../components/Settings/styles';
import SnackAlert from '../components/SnackAlert/SnackAlert';

function AlertTemplate(info) {
  console.log('sa');
  return (
    <div style={{ position: 'relative' }}>

      <SnackAlert info={info} />

    </div>
  );
}
function Settings() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };
  return (
    <Provider template={AlertTemplate} {...options}>
      <SettingsContiner>
        <SettingsHeader />
        <Outlet />
      </SettingsContiner>
    </Provider>
  );
}

export default Settings;
