import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import RemovePopUp from './RemovePopUp';
import NonEmptyModerator from '../NonEmptyModerator/NonEmptyModerator';

test('test snapshot', async () => {
  const props = {
    posts: true,
  };
  const tree = renderer.create(<Router><NonEmptyModerator {...props}><RemovePopUp /></NonEmptyModerator></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
