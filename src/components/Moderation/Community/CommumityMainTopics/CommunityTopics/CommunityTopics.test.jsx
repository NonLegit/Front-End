import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CommunityTopics from './CommunityTopics';

// test snapshot
const setTopics = () => {};
test('test snapshot', async () => {
  const props = {
    topics: [],
    setTopics,
  };
  const tree = renderer.create(<CommunityTopics {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
