import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Entity from './Entity';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Entity />).toJSON();
  expect(tree).toMatchSnapshot();
});
