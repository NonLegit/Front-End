import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Radio from './Radio';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Radio />).toJSON();
  expect(tree).toMatchSnapshot();
});
