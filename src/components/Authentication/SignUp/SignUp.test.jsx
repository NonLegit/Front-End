import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../../App';
import SignUp from './SignUp';

// render signup page
it('should render Signup page', () => {
  window.history.pushState({}, '', '/register');
  render(<App />);
  expect(screen.queryByTestId('signup-test')).toBeInTheDocument();
});

// Empty Email Field View is SignUpEmail not SignUpUsername
it('Empty Email Field Keeps view on SigUpEmail Page', () => {
  window.history.pushState({}, '', '/register');
  render(<App />);
  expect(screen.queryByTestId('signup-test')).toBeInTheDocument();

  const emailbtn = screen.getByTestId('email-btn-test');
  fireEvent.click(emailbtn);
  expect(screen.queryByTestId('signup-email-test')).toBeInTheDocument();
  expect(screen.queryByTestId('signup-username-test')).toBeNull();
});

// Invalid Email Field View is SignUpEmail not SignUpUsername
it('InValid Email Field Keeps view on SigUpEmail Page', () => {
  window.history.pushState({}, '', '/register');
  render(<App />);
  expect(screen.queryByTestId('signup-test')).toBeInTheDocument();

  const emailfield = screen.queryByTestId('SignUpEmail-test').querySelector('input');
  expect(emailfield).toBeInTheDocument();
  fireEvent.change(emailfield, { target: { value: 'Bamsa_Elhoseny' } });

  const emailbtn = screen.getByTestId('email-btn-test');
  fireEvent.click(emailbtn);
  expect(screen.queryByTestId('signup-email-test')).toBeInTheDocument();
  expect(screen.queryByTestId('signup-username-test')).toBeNull();
});

// valid Email Field changes the View to be SignUpUsername not SignUpEmail
it('Valid Email Field changes view to SignUpUsername Page', () => {
  window.history.pushState({}, '', '/register');
  render(<App />);
  expect(screen.queryByTestId('signup-test')).toBeInTheDocument();

  const emailfield = screen.queryByTestId('SignUpEmail-test').querySelector('input');
  expect(emailfield).toBeInTheDocument();
  fireEvent.change(emailfield, { target: { value: 'basmaelhoseny6@gmail.com' } });

  const emailbtn = screen.queryByTestId('email-btn-test');
  expect(emailbtn).toBeInTheDocument();
  fireEvent.click(emailbtn);

  // Loading Effect
  setTimeout(() => {
    expect(screen.queryByTestId('signup-email-test')).toBeNull();
    expect(screen.queryByTestId('signup-username-test')).toBeInTheDocument();
  }, 30000);
});

// test snapshot
test('SigUp test snapshot', async () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
