import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Filter from './Filter';

test('Filter test snapshot', async () => {
  const tree = renderer.create(
    <Filter />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
