import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContiner, TabsContiner, Tab, TabText, Nav,
} from './styles';
/**
 * - Settings Header
 * - Header of settings page
 *  @component
 *  @return {React.Component} - Body of  Header of settings page
 */
function SettingsHeader() {
  const [navigate, setNavigate] = useState('/settings');
  const history = useNavigate();
  useEffect(() => {
    setNavigate(window.location.pathname);
  }, [history]);
  return (
    <section data-testid="settings-header">

      <HeaderContiner id="settings">User settings</HeaderContiner>

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
