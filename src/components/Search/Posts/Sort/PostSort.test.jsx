import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Sort from './Sort';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Sort />).toJSON();
  expect(tree).toMatchSnapshot();
});
