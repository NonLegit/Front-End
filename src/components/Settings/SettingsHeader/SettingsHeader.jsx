import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContiner, TabsContiner, Tab, TabText, Nav,
} from './styles';
/**
 * - SettingsHeader
 * - Head of Settings
 *  @component
 */
function SettingsHeader() {
  const [navigate, setNavigate] = useState('/settings');
  const history = useNavigate();
  useEffect(() => {
    setNavigate(window.location.pathname);
  }, [history]);
  return (
    <section>

      <HeaderContiner>User settings</HeaderContiner>

      <Nav>
        <TabsContiner>
          <Tab
            active={navigate === '/settings' || navigate === '/settings/account'}
            to="/settings/account"
          >
            <TabText>Account</TabText>
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
        </TabsContiner>
      </Nav>
    </section>
  );
}

export default SettingsHeader;
