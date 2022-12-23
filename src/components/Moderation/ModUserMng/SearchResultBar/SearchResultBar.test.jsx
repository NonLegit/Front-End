import renderer from 'react-test-renderer';
import SearchResultBar from './SearchResultBar';

const data = () => {};

test('test snapshot', async () => {
  const tree = renderer.create(
    <SearchResultBar
      resultNumber="350k"
      filteredData={[]}
      childToParent={data}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
