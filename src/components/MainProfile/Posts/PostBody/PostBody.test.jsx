import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import PostBody from './PostBody';

test('test snapshot', async () => {
  const props = {
    post: {
      kind: 'self',
    },
  };

  const tree = renderer.create(
    <Router>
      <EditPostContextProvider>
        <PostBody {...props} />
      </EditPostContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
