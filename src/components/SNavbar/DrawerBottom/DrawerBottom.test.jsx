import {
  render, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import SNavbar from '../SNavbar';

import DrawerBottom from './DrawerBottom';

it('test login popup', async () => {
  render(<SNavbar />);
  fireEvent.click(screen.getByTestId('drawer-login'));
  expect(screen.getByTestId('login-popup')).toBeInTheDocument();
});

test('test snapshot', async () => {
  const tree = renderer.create(<DrawerBottom />).toJSON();
  expect(tree).toMatchSnapshot();
});
