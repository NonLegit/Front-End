import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SideBarQueue from './SideBarQueue';

test('SideBarQueue test snapshot', async () => {
  const tree = renderer.create(
    <SideBarQueue />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
