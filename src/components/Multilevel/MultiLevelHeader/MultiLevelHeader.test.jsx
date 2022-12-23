import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevelHeader from './MultiLevelHeader';
import MultiLevel from '../MultiLevel';

// Use Navigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// test snapshot
test('MultiLevelHeader-test-snapshot', async () => {
  // Render Component Of Post Provider
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <MultiLevelHeader />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
