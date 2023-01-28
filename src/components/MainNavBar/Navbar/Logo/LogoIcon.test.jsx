import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import LogoIcon from './logoIcon';
import Navbar from '../Navbar';

const mockedUsedMessaging = jest.fn();
jest.mock('firebase/messaging', () => ({
  ...jest.requireActual('firebase/messaging'),
  getMessaging: () => mockedUsedMessaging,
}));
test('test snapshot', async () => {
  const tree = renderer.create(<Router><Navbar><LogoIcon /></Navbar></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
