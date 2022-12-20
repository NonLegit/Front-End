import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CmmunityMainTopics from './CmmunityMainTopics';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<CmmunityMainTopics />).toJSON();
  expect(tree).toMatchSnapshot();
});
