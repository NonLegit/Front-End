import renderer from 'react-test-renderer';
import CommunitiesHeader from './CommunitiesHeader';

test('test snapshot', async () => {
  const tree = renderer.create(<CommunitiesHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
