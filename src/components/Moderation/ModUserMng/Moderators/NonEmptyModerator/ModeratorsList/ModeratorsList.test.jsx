import renderer from 'react-test-renderer';
import ModeratorsList from './ModeratorsList';

test('test snapshot', async () => {
  const tree = renderer.create(<ModeratorsList />).toJSON();
  expect(tree).toMatchSnapshot();
});
