import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchField from './Search';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SearchField /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
