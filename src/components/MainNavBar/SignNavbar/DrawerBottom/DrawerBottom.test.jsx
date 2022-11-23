import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SNavbar from '../SignNavbar';
import DrawerBottom from './DrawerBottom';

it('test login popup', async () => {
  render(
    <Router>
      <SNavbar />
    </Router>,
  );
  fireEvent.click(screen.getByTestId('drawer-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<DrawerBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
