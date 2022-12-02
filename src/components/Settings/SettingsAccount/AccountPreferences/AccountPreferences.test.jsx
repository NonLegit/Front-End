import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AccountPreferences from './AccountPreferences';
import SettingsAccount from '../SettingsAccount';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsAccount>
        <AccountPreferences />
      </SettingsAccount>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
