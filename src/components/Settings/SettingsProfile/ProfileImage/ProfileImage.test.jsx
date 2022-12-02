import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import SettingsProfile from '../SettingsProfile';
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsProfile>
        <ProfileImage />
      </SettingsProfile>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
