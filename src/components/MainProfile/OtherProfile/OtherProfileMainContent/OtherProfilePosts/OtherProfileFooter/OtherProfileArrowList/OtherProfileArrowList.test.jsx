import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfileArrowList from './OtherProfileArrowList';

test('test snapshot', async () => {
  const tree = renderer.create(
    <OtherProfileArrowList />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
