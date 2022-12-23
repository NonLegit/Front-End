import renderer from 'react-test-renderer';
import SearchResultBar from './SearchResultBar';

test('test snapshot', async () => {
  const tree = renderer.create(<SearchResultBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
