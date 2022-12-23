import renderer from 'react-test-renderer';
import SimilarTopics from './SimilarTopics';

test('test snapshot', async () => {
  const tree = renderer.create(<SimilarTopics />).toJSON();
  expect(tree).toMatchSnapshot();
});
