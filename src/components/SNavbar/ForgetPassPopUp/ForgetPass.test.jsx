import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SNavbar from '../SNavbar';
import ForgetPassword from './ForgetPass';

it('test forgetpass popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetpass'));
  fireEvent.click(screen.getByTestId('forgetpass-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

it('test forgetpass popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetpass'));
  fireEvent.click(screen.getByTestId('forgetpass-signup'));
  expect(screen.getByTestId('signup-popup')).toBeInTheDocument();
});

it('test forgetpass popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetpass'));
  fireEvent.click(screen.getByTestId('forgetpass-forgetuser'));
  expect(screen.getByTestId('forgetuser-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<SNavbar><ForgetPassword /></SNavbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
