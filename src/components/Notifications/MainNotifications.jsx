/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-param-reassign */
import { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import
{
  NotificationsHead, HeaderContiner, TabsContiner,
  Tab, TabText, theme, CreateCommunity, Text, CreateCommunityContainer,
} from './styles';
import NotificationsBody from './NotificationsBody/NotificationsBody';
import { notificationMarkAll } from './notificationsServer';
import FormDialog from '../HomePage/HomePageContainer/PersonalReddit/PopUpSubReddit/PopUp';
/**
 * - Main Notifications
 * - fech notifications data from api
 *  @component
 * @param {function} setToday - to update today notifiactions
 * @param {function} setEarlier - to update eariler notifiactions
 * @param {Array} earlier - Array of eariler notifiactions
 * @param {Array} today - Array of today notifiactions
 * @property  {Array} active - Array of boolean to know which header is active
 * @property {function} setActive - function to set active Array
 * @property {function} clickTab - function to know which header is clicked
 * @property {function} handleClick - function to make all notifications mark as read
 * @return {React.Component} - Notifications Page
 */

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
      { (today?.length === 0) && (earlier?.length === 0)
        && (
        <CreateCommunityContainer>
          <Text>You can Create Communtiy to get notifications</Text>
          <CreateCommunity
            onClick={() => {
              const ele = document.getElementById('popup-form-button');
              console.log(ele);
              ele.click();
            }}
          >
            Create Communtiy
          </CreateCommunity>
        </CreateCommunityContainer>
        )}
      <FormDialog display="none" />
    </div>
  );
}

export default MainNotifications;
