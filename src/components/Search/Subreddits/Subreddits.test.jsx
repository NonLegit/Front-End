import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Subreddits from './Subreddits';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Subreddits />).toJSON();
  expect(tree).toMatchSnapshot();
});
