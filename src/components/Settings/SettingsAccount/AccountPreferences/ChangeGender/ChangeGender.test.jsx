import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ChangeGender from './ChangeGender';
import SettingsAccount from '../../SettingsAccount';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsAccount>
        <ChangeGender />
      </SettingsAccount>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
