import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ListingContextProvider from '../../../contexts/ListingContext';
import CommentsTap from './CommentsTap';
import MainProfile from '../MainProfile';

test('commentsTap test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <CommentsTap />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
