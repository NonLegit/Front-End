import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import
{
  render, screen,
} from '@testing-library/react';
import ChangeGender from './ChangeGender';
import SettingsAccount from '../../SettingsAccount';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// render settings-cahnge-gender page
test('should render settings-cahnge-gender page', () => {
  window.history.pushState({}, '', '/settings/account');
  render(

    <Router>

      <SettingsAccount>

        <ChangeGender />

      </SettingsAccount>

    </Router>,
  );
  expect(screen.getByTestId('settings-cahnge-gender')).toBeInTheDocument();
});
