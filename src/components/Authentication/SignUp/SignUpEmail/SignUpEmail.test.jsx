import {
  render, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import SignUpEmail from './SignUpEmail';
import App from '../../../../App';
// Invalid Email
test('In Valid Email', async () => {
  window.history.pushState({}, '', '/register');
  render(<App />);
  //   fireEvent.click(screen.getByTestId('SignUpEmail-test'));
  // const { getByText } = within(screen.getByTestId('login-username-field-test'));
  // Error Message Appears
  //   expect(screen.getByText('Username must be between 3 and 20 characters')).toBeInTheDocument();
  // The Hoempage isn't loaded
  expect(screen.getByTestId('SignUpEmail-test')).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<SignUpEmail />).toJSON();
  expect(tree).toMatchSnapshot();
});
