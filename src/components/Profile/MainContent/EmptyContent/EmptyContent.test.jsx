import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import EmptyContent from './EmptyContent';

test('test snapshot', async () => {
  const tree = renderer.create(<EmptyContent />).toJSON();
  expect(tree).toMatchSnapshot();
});
