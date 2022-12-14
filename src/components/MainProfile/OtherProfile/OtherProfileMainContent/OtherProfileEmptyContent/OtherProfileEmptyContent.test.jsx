import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfileEmptyContent from './OtherProfileEmptyContent';

test('test snapshot', async () => {
  const tree = renderer.create(<OtherProfileEmptyContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
