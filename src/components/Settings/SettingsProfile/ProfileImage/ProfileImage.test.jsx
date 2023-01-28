import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProfileImage from './ProfileImage';
import SettingsProfile from '../SettingsProfile';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
const renderer = new ShallowRenderer();
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.render(
    <Router>
      <SettingsProfile>
        <ProfileImage />
      </SettingsProfile>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
