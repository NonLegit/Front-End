import renderer from 'react-test-renderer';
import ExploreMainPage from './ExploreMainPage';

test('test snapshot', async () => {
  const tree = renderer.create(<ExploreMainPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
