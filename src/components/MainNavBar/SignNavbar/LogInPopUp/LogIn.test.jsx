import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LogIn from './LogIn';
import SNavbar from '../SignNavbar';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SNavbar><LogIn /></SNavbar></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
