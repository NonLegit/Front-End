import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContiner, TabsContiner, Tab, TabText,
} from './style';

function SettingsHeader() {
  const [navigate, setNavigate] = useState('/settings');
  const history = useNavigate();
  useEffect(() => {
    setNavigate(window.location.pathname);
  }, [history]);
  return (
    <>
      <header>
        <HeaderContiner>User settings</HeaderContiner>
      </header>
      <nav>
        <TabsContiner>
          <Tab
            active={navigate === '/settings' || navigate === '/settings/account'}
            to="/settings/account"
          >
            <TabText>Activity</TabText>
          </Tab>
          <Tab to="/settings/profile" active={navigate === '/settings/profile'}>
            <TabText>
              Profile
            </TabText>
          </Tab>
          <Tab to="/settings/privacy" active={window.location.pathname === '/settings/privacy'}>
            <TabText>Safety & privacy</TabText>
          </Tab>
          <Tab to="/settings/feed" active={window.location.pathname === '/settings/feed'}>
            <TabText> Feed Settings</TabText>
          </Tab>
          <Tab to="emails" active={window.location.pathname === '/settings/emails'}>
            <TabText> Email</TabText>
          </Tab>
        </TabsContiner>
      </nav>
    </>
  );
}

export default SettingsHeader;
