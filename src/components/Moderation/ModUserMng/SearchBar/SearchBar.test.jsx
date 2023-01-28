import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';

test('test snapshot', async () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
