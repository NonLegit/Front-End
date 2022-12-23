import '@testing-library/jest-dom';
import
{
  render, screen,
} from '@testing-library/react';
import SettingsProfile from './SettingsProfile';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));

// render settings-profile page
it('should render settings-profile page', () => {
  window.history.pushState({}, '', '/settings/profile');
  render(<SettingsProfile />);
  expect(screen.getByTestId('settings-profile')).toBeInTheDocument();
});
