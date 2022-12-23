import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import MultiLevel from './MultiLevel';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// test snapshot
test('MultiLevel-test-snapshot', async () => {
  const tree = renderer.create(<MultiLevel />).toJSON();
  expect(tree).toMatchSnapshot();
});
