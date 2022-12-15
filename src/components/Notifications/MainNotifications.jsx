/* eslint-disable no-param-reassign */
import { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import
{
  NotificationsHead, HeaderContiner, TabsContiner, Tab, TabText, theme,
} from './styles';
import NotificationsBody from './NotificationsBody/NotificationsBody';
import { notificationMarkAll } from './notificationsServer';

function MainNotifications() {
  // earlier data
  const [earlier, setEarlier] = useState([]);
  // today data
  const [today, setToday] = useState([]);

  const [active, setActive] = useState([1, 0, 0, 0]);
  // fuction to set styling of active tab
  const clickTab = (index) => {
    const arr = [...active];
    arr[index] = 1;
    setActive(arr);
  };

  const handleClick = () => {
    const dataEarlier = earlier;
    dataEarlier.forEach((obj) => {
      obj.seen = true;
    });
    setEarlier(dataEarlier);

    const dataToday = today;
    dataToday.forEach((obj) => {
      obj.seen = true;
    });
    clickTab(2);
    setToday(dataToday);
    notificationMarkAll();
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeaderContiner data-testid="notifications-header">
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
            <Tab active={active[2]} onClick={() => { handleClick(); }}>
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
      <NotificationsBody earlier={earlier} setEarlier={setEarlier} today={today} setToday={setToday} />
    </div>
  );
}

export default MainNotifications;
