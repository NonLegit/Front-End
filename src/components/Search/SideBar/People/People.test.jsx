import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import People from './People';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<People />).toJSON();
  expect(tree).toMatchSnapshot();
});
