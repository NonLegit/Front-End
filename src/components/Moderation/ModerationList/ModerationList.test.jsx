import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ModerationList from './ModerationList';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<ModerationList />).toJSON();
  expect(tree).toMatchSnapshot();
});
