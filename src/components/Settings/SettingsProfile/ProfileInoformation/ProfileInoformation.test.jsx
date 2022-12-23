import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileInoformation from './ProfileInoformation';
import SettingsProfile from '../SettingsProfile';

const renderer = new ShallowRenderer();
const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.render(
    <Router>
      <SettingsProfile>
        <ProfileInoformation />
      </SettingsProfile>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
