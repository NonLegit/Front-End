import '@testing-library/jest-dom';

import
{
  render, screen,
} from '@testing-library/react';

import SettingsAccount from '../SettingsAccount';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot

// render account-performance  page
test('should render account-performance page', () => {
  window.history.pushState({}, '', '/settings/account');
  render(<SettingsAccount />);
  expect(screen.getByTestId('settings-account')).toBeInTheDocument();
});
