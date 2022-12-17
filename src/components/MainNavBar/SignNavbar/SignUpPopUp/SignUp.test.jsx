import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import SNavbar from '../SignNavbar';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SNavbar><SignUp /></SNavbar></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
