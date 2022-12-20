import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileInoformation from './ProfileInoformation';
import SettingsProfile from '../SettingsProfile';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsProfile>
        <ProfileInoformation />
      </SettingsProfile>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
