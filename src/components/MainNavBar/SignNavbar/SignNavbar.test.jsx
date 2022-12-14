import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SignNavbar from './SignNavbar';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SignNavbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
