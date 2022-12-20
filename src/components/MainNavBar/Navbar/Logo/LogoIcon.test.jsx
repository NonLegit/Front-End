import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import LogoIcon from './logoIcon';
import Navbar from '../Navbar';

global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};
test('test snapshot', async () => {
  const tree = renderer.create(<Router><Navbar><LogoIcon /></Navbar></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
