import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import SideBar from './SideBar';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<SideBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
