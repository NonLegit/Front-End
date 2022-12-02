import renderer from 'react-test-renderer';
import HomeList from './HomeList';

test('test snapshot', async () => {
  const tree = renderer.create(<HomeList />).toJSON();
  expect(tree).toMatchSnapshot();
});
