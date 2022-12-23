import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from '../../App';
import CreatePostInSubredditContextProvider from '../../contexts/CreatePostInSubredditContext';
import ListingContextProvider from '../../contexts/ListingContext';
import PostTypeContextProvider from '../../contexts/PostTypeContext';

import Cover from './Cover';

// // test snapshot
// test('test snapshot', async () => {
//   const tree = renderer.create(
//     <App>
//       <Router>
//         <Cover />
//       </Router>
//     </App>,
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <PostTypeContextProvider>
        <ListingContextProvider>
          <CreatePostInSubredditContextProvider>
            <Cover />
          </CreatePostInSubredditContextProvider>
        </ListingContextProvider>
      </PostTypeContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
