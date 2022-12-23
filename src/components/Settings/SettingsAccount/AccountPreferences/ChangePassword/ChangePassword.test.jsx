import
{
  screen, render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import CahngePassword from './CahngePassword';
// render forget change password popup
it('should render Reset change password popup', () => {
  window.history.pushState({}, '', '/settings/account');
  render(<CahngePassword />);
  expect(screen.queryByTestId('resetpassword-test')).toBeInTheDocument();
});
