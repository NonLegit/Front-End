import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import ListingContextProvider from '../../../../contexts/ListingContext';
import NonEmptyQueue from './NonEmptyQueue';
import Queue from '../Queue';

test('NonEmptyQueue test snapshot', async () => {
  // window.location.href('https://web.nonlegit.click/r/TryCommunity/about/Unmoderated');
  // window.history.pushState({}, '', '/subreddits/name/about/posts/location');
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <EditPostContextProvider>
          <Queue>
            <NonEmptyQueue />
          </Queue>
        </EditPostContextProvider>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});