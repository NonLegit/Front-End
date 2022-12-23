import renderer from 'react-test-renderer';
import HomeList from './HomeList';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<HomeList />).toJSON();
  expect(tree).toMatchSnapshot();
});
