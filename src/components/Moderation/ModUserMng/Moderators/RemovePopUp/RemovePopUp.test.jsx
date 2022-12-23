import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import RemovePopUp from './RemovePopUp';
import NonEmptyModerator from '../NonEmptyModerator/NonEmptyModerator';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><NonEmptyModerator><RemovePopUp /></NonEmptyModerator></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
