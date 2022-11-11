import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignUp from './SignUp';
import SNavbar from '../SNavbar';

it('test signup popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-signup'));
  fireEvent.click(screen.getByTestId('signup-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<SNavbar><SignUp /></SNavbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
