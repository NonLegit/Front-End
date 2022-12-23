import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import EmptyQueue from './EmptyQueue';

test('Empty Queue test snapshot', async () => {
  const tree = renderer.create(
    <EmptyQueue />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
