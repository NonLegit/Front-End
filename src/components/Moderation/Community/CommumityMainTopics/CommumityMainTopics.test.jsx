import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CmmunityMainTopics from './CmmunityMainTopics';

// test snapshot
const setTopics = () => {};
const setPrimaryTopic = () => {};

test('test snapshot', async () => {
  const props = {
    topics: [],
    Name: 'aa',
    primaryTopic: 'aa',
    setTopics,
    setPrimaryTopic,
  };
  const tree = renderer.create(<CmmunityMainTopics {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
