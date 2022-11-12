import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavIcons from './NavIcons';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router><NavIcons /></Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
