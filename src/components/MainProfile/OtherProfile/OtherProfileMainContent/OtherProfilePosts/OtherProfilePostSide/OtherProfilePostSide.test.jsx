import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfilePostSide from './OtherProfilePostSide';

test('test snapshot', async () => {
  const tree = renderer.create(
    <OtherProfilePostSide />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
