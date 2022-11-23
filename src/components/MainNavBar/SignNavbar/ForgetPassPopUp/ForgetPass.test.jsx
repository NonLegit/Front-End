import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SNavbar from '../SignNavbar';
import ForgetPassword from './ForgetPass';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SNavbar><ForgetPassword /></SNavbar>
      {' '}

    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
