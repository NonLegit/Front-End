import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SNavbar from '../SNavbar';
import ForgetUsername from './ForgetUser';

it('test forgetuser popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetuser'));
  fireEvent.click(screen.getByTestId('forgetuser-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

it('test forgetuser popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetuser'));
  fireEvent.click(screen.getByTestId('forgetuser-signup'));
  expect(screen.getByTestId('signup-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<SNavbar><ForgetUsername /></SNavbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
