import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../../../App';
import ForgetPassword from './ForgetPassword';

// render forget password page
it('should render Forget password page', () => {
  window.history.pushState({}, '', '/password');
  render(<App />);
  expect(screen.queryByTestId('forgetpassword-test')).toBeInTheDocument();
});

// Empty Fields
it('Empty Fields Keeps view on Forget password Page', () => {
  window.history.pushState({}, '', '/password');
  render(<App />);
  expect(screen.queryByTestId('forgetpassword-test')).toBeInTheDocument();

  const resetbtn = screen.getByTestId('reset-password-btn-test');
  fireEvent.click(resetbtn);
  setTimeout(() => {
    expect(screen.queryByTestId('forgetpassword-test')).toBeInTheDocument();
    expect(screen.queryByTestId('forgetpassword-redirect-caption-test')).toBeNull();
  }, 5000);
});

it('Invlaid UserName', () => {
  window.history.pushState({}, '', '/password');
  render(<App />);
  const field1 = screen.getByTestId('forgetpassword-username-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'a' } });

  const resetbtn = screen.getByTestId('reset-password-btn-test');
  fireEvent.click(resetbtn);

  // The Email isn't Valid
  expect(screen.queryByText('Username must be between 3 and 20 characters')).toBeInTheDocument();
});

it('Invlaid Email', () => {
  window.history.pushState({}, '', '/password');
  render(<App />);
  const field1 = screen.getByTestId('forgetpassword-email-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Bamsa_Elhoseny' } });

  const resetbtn = screen.getByTestId('reset-password-btn-test');
  fireEvent.click(resetbtn);

  // The Email isn't Valid
  expect(screen.queryByText('Please fix your email to continue')).toBeInTheDocument();
});

// Valid inputs

it('Valid inpts', () => {
  window.history.pushState({}, '', '/password');
  render(<App />);
  const field1 = screen.getByTestId('forgetpassword-username-input').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma_Elhoseny01' } });

  const field2 = screen.getByTestId('forgetpassword-email-input').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: 'basmaelhoseny6@gmail.com' } });

  const resetbtn = screen.getByTestId('reset-password-btn-test');
  fireEvent.click(resetbtn);

  setTimeout(() => {
    expect(screen.queryByText(' Thanks! If your Reddit username and email address match, you’ll get an email with a link to reset your password shortly.')).toBeInTheDocument();
    // expect(screen.queryByTestId('forgetpassword-redirect-caption-test')).toBeInTheDocument();
  }, 5000);
});

// test snapshot
test('ForgetPassword-test-snapshot', async () => {
  const tree = renderer.create(<ForgetPassword />).toJSON();
  expect(tree).toMatchSnapshot();
});
