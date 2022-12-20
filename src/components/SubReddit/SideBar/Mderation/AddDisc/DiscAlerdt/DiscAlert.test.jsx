import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import DistAlert from './DistAlert';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<DistAlert />).toJSON();
  expect(tree).toMatchSnapshot();
});
