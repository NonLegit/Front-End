import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CommunityTopics from './CommunityTopics';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<CommunityTopics />).toJSON();
  expect(tree).toMatchSnapshot();
});
