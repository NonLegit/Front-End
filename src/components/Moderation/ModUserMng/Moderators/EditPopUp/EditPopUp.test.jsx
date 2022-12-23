import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPopUp from './EditPopUp';
import NonEmptyModerator from '../NonEmptyModerator/NonEmptyModerator';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <NonEmptyModerator
        userName="fady"
        profilePicture="users/default.png"
        modDate="2022-12-20T00:53:55.071Z"
        all
        access
        config
        flair
        posts
        type={1}
      >
        <EditPopUp userName="fady" />
      </NonEmptyModerator>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
