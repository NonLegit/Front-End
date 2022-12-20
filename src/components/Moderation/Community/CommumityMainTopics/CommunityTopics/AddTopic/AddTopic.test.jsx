import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AddTopic from './AddTopic';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<AddTopic />).toJSON();
  expect(tree).toMatchSnapshot();
});
