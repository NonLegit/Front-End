import renderer from 'react-test-renderer';
import RedditButton from './RedditButton';

test('test snapshot', async () => {
  const tree = renderer.create(<RedditButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
