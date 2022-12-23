import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPopUp from './EditPopUp';
import NonEmptyModerator from '../NonEmptyModerator/NonEmptyModerator';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><NonEmptyModerator><EditPopUp /></NonEmptyModerator></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
