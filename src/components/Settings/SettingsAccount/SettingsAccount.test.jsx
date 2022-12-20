import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsAccount from './SettingsAccount';
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
      <SettingsAccount />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-account page
test('should render settings-feed page', () => {
  window.history.pushState({}, '', '/settings/account');
  render(<App />);
  expect(screen.getByTestId('settings-account')).toBeInTheDocument();
});
