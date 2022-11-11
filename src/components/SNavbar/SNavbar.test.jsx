import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SNavbar from './SNavbar';

it('test login popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

it('test signup popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('navbar-signup'));
  expect(screen.getByTestId('signup-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<SNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
