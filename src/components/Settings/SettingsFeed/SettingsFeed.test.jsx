import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SettingsFeed from './SettingsFeed';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsFeed />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
