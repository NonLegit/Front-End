import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import
{
  NotificationsHead, HeaderContiner, TabsContiner, Tab, TabText, theme,
} from './styles';
/**
 * Notifications Header
 * The component has function clickTab
 * @return {React.Component} - Header of notifications page
 */

function NotificationsHeader() {
  const [active, setActive] = useState([1, 0, 0, 0]);
  const clickTab = (index) => {
    const arr = [...active];
    arr[index] = 1;
    setActive(arr);
  };
  return (
    <ThemeProvider theme={theme}>
      <HeaderContiner data-testid="notifications-header-test">
        <NotificationsHead>Notifications</NotificationsHead>
        <TabsContiner>
          <Tab index="1" active={active[0]} onClick={() => { clickTab(0); }}>
            <TabText>Activity</TabText>
          </Tab>
          <Tab index="2" active={active[1]} onClick={() => { clickTab(1); }}>
            <Link to="/messages">
              <TabText data-testid="message-router">Messages</TabText>
            </Link>
          </Tab>
          <Tab active={active[2]} onClick={() => { clickTab(2); }}>
            <BeenhereOutlinedIcon />
            <TabText>Mark as Read</TabText>
          </Tab>
          <Tab active={active[3]} onClick={() => { clickTab(3); }}>
            <SettingsOutlinedIcon />
            <Link to="/settings">
              <TabText>
                Settings
              </TabText>
            </Link>
          </Tab>
        </TabsContiner>
      </HeaderContiner>
    </ThemeProvider>
  );
}

export default NotificationsHeader;
