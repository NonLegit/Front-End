import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import CreatePostInSubredditContextProvider from '../../contexts/CreatePostInSubredditContext';
import ListingContextProvider from '../../contexts/ListingContext';
import PostTypeContextProvider from '../../contexts/PostTypeContext';

import Cover from './Cover';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <Router>
      <PostTypeContextProvider>
        <ListingContextProvider>
          <CreatePostInSubredditContextProvider>
            <Cover />
          </CreatePostInSubredditContextProvider>
        </ListingContextProvider>
      </PostTypeContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
