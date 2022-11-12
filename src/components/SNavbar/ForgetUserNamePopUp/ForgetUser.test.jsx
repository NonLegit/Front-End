import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SNavbar from '../SNavbar';
import ForgetUsername from './ForgetUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SNavbar><ForgetUsername /></SNavbar></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
