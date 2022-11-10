import '@testing-library/jest-dom';
import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignUpUsername from './SignUpUsername';

jest.unmock('react-redux');
it('Empty Field', () => {
  render(<SignUpUsername />);
  const signupbtn = screen.getByTestId('sigup-btn-test');
  expect(signupbtn).toBeInTheDocument();
  fireEvent.click(signupbtn);

  // The Hoempage isn't loaded
  expect(screen.getByTestId('signup-username-test')).toBeInTheDocument();
});

it('Short length username', () => {
  render(<SignUpUsername />);
  const field1 = screen.getByTestId('username-signup-field-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'B' } });

  const field2 = screen.getByTestId('password-signup-field-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '123458995' } });

  const signupbtn = screen.getByTestId('sigup-btn-test');
  expect(signupbtn).toBeInTheDocument();
  fireEvent.click(signupbtn);

  // Loading Effect
  setTimeout(() => {
    // Short username message
    expect(screen.queryByTestId('Username must be between 3 and 20 characters')).toBeInTheDocument();
    // The Hoempage isn't loaded
    expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
  }, 30000);
});

// Invalid username
it('Invalid username Syntax', () => {
  render(<SignUpUsername />);
  const field1 = screen.getByTestId('username-signup-field-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma#01' } });

  const field2 = screen.getByTestId('password-signup-field-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '123458995' } });

  const signupbtn = screen.getByTestId('sigup-btn-test');
  expect(signupbtn).toBeInTheDocument();
  fireEvent.click(signupbtn);

  // Loading Effect
  setTimeout(() => {
    // Short username message
    expect(screen.queryByTestId('Letters, numbers, dashes, and underscores only. Please try again without symbols.')).toBeInTheDocument();
    // The Hoempage isn't loaded
    expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
  }, 30000);
});

it('Choose suggested Username', () => {
  render(<SignUpUsername />);

  //   const suggestedusername = screen.queryByTestId('suggest-username-Basma-test');
  //   expect(suggestedusername).toBeInTheDocument();
  //   fireEvent.click(suggestedusername);

  const field1 = screen.getByTestId('username-signup-field-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  //   fireEvent.change(field1, { target: { value: {suggestedusername.value} } });

  // Loading Effect
//   setTimeout(() => {
  // // Short username message
  // expect(screen.queryByTestId('This Password isn\'t acceptable')).toBeInTheDocument();
  // // The Hoempage isn't loaded
  // expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
//   }, 30000);
});

it('Short Password', () => {
  render(<SignUpUsername />);
  const field2 = screen.getByTestId('password-signup-field-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '123' } });

  // Loading Effect
  setTimeout(() => {
    // Short username message
    expect(screen.queryByTestId('Password must be at least 8 characters long')).toBeInTheDocument();
    // The Hoempage isn't loaded
    expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
  }, 30000);
});

it('Weak Password', () => {
  render(<SignUpUsername />);
  const field1 = screen.getByTestId('username-signup-field-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'BasmaElhoseny01' } });

  const field2 = screen.getByTestId('password-signup-field-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '0000000000000' } });

  const signupbtn = screen.getByTestId('sigup-btn-test');
  expect(signupbtn).toBeInTheDocument();
  fireEvent.click(signupbtn);

  // Loading Effect
  setTimeout(() => {
    // Short username message
    expect(screen.queryByTestId('This Password isn\'t acceptable')).toBeInTheDocument();
    // The Hoempage isn't loaded
    expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
  }, 30000);
});

it('Sucessful SignUp', () => {
  render(<SignUpUsername />);
  const field1 = screen.getByTestId('username-signup-field-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'BasmaElhoseny01' } });

  const field2 = screen.getByTestId('password-signup-field-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '123515dcgdrfzgr' } });

  const signupbtn = screen.getByTestId('sigup-btn-test');
  expect(signupbtn).toBeInTheDocument();
  fireEvent.click(signupbtn);

  // The Hoempage is loaded
  expect(window.location.pathname).toEqual('/');
});

// test snapshot
test('SigUp test snapshot', async () => {
  const tree = renderer.create(<SignUpUsername />).toJSON();
  expect(tree).toMatchSnapshot();
});
