import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsHeader />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
