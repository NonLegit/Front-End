import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './SideBar';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Router><SideBar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
