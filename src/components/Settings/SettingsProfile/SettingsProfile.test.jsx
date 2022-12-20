import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsProfile from './SettingsProfile';
import App from '../../../App';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsProfile />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-profile page
it('should render settings-profile page', () => {
  window.history.pushState({}, '', '/settings/profile');
  render(<App />);
  expect(screen.getByTestId('settings-profile')).toBeInTheDocument();
});
