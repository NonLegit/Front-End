import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevelSideBar from './MultiLevelSideBar';
import MultiLevel from '../MultiLevel';

// test snapshot
test('MultiLevelSideBar-test-snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <MultiLevelSideBar />
      </MultiLevel>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
