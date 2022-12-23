import '@testing-library/jest-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsPrivacy from './SettingsPrivacy';

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

// test snapshot

// render settings-privacy page
test('should render settings-privacy page', () => {
  window.history.pushState({}, '', '/settings/privacy');
  render(<SettingsPrivacy />);
  expect(screen.getByTestId('settings-privacy')).toBeInTheDocument();
});
