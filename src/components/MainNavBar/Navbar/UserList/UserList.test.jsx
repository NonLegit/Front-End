import renderer from 'react-test-renderer';
import UserList from './UserList';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<UserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
