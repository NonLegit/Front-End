import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import ResetPassword from './ResetPassword';

// render forget password page
it('should render Reset password page', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  expect(screen.queryByTestId('resetpassword-test')).toBeInTheDocument();
});

// Empty Fields
it('Empty Fields Keeps view on Reset password Page', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  expect(screen.queryByTestId('resetpassword-test')).toBeInTheDocument();

  const resetbtn = screen.getByTestId('set-newpassword-btn-test');
  fireEvent.click(resetbtn);
  setTimeout(() => {
    expect(screen.queryByTestId('resetpassword-test')).toBeInTheDocument();
    expect(screen.queryByTestId('login-test')).toBeNull();
  }, 5000);
});

it('Short Password', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  const field1 = screen.getByTestId('resetpassword-password-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma@1' } });

  const resetbtn = screen.getByTestId('set-newpassword-btn-test');
  fireEvent.click(resetbtn);

  // The Password is Short
  expect(screen.queryByText('Password must be at least 8 characters long')).toBeInTheDocument();
});

it('Mismatched Passwords', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  // Password
  const field1 = screen.getByTestId('resetpassword-password-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma@123456' } });

  // RePassword
  const field2 = screen.getByTestId('resetpassword-repassword-input').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: 'Basma@12345' } });

  const resetbtn = screen.getByTestId('set-newpassword-btn-test');
  fireEvent.click(resetbtn);

  // Mismatched Passwords
  expect(screen.queryByText('Password must match')).toBeInTheDocument();
});

it('Invalid Token', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  // Password
  const field1 = screen.getByTestId('resetpassword-password-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma@123456' } });

  // RePassword
  const field2 = screen.getByTestId('resetpassword-repassword-input').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: 'Basma@123456' } });

  const resetbtn = screen.getByTestId('set-newpassword-btn-test');
  fireEvent.click(resetbtn);

  // Invalid Token
  setTimeout(() => {
    expect(screen.queryByText('Token has expired')).toBeInTheDocument();
  }, 5000);
});

it('Weak Password', () => {
  window.history.pushState({}, '', '/resetpassword/123466Fadsfgkvbnm');
  render(<ResetPassword />);
  // Password
  const field1 = screen.getByTestId('resetpassword-password-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'basma1234' } });

  // RePassword
  const field2 = screen.getByTestId('resetpassword-repassword-input').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: 'basma1234' } });

  const resetbtn = screen.getByTestId('set-newpassword-btn-test');
  fireEvent.click(resetbtn);

  // Invalid Token
  setTimeout(() => {
    expect(screen.queryByText('Weak Password must contain Capital letter and numbers')).toBeInTheDocument();
  }, 5000);
});

// test snapshot
test('ResetPassword-test-snapshot', async () => {
  const tree = renderer.create(<ResetPassword />).toJSON();
  expect(tree).toMatchSnapshot();
});
