import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ModerationList from './ModeratorList';

test('Moderation List test snapshot', async () => {
  const tree = renderer.create(<ModerationList />).toJSON();
  expect(tree).toMatchSnapshot();
});
