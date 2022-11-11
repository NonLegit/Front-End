import {
  render, screen, fireEvent,
} from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LogIn from './LogIn';
import SNavbar from '../SNavbar';

it('test login popup', async () => {
//   render(<Router><SNavbar><LogIn /></SNavbar></Router>);
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetpass'));
  expect(screen.getByTestId('forgetpass-popup')).toBeInTheDocument();
});

it('test login popup', async () => {
  //   render(<Router><SNavbar><LogIn /></SNavbar></Router>);
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-forgetuser'));
  expect(screen.getByTestId('forgetuser-popup')).toBeInTheDocument();
});

it('test login popup', async () => {
  //   render(<Router><SNavbar><LogIn /></SNavbar></Router>);
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  fireEvent.click(screen.getByTestId('login-signup'));
  expect(screen.getByTestId('signup-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<SNavbar><LogIn /></SNavbar>).toJSON();
  expect(tree).toMatchSnapshot();
});
