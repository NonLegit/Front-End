import renderer from 'react-test-renderer';
import SearchField from './Search';

test('test snapshot', async () => {
  const tree = renderer.create(<SearchField />).toJSON();
  expect(tree).toMatchSnapshot();
});
