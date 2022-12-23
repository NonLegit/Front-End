import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProfileMainContent from '../../Profile/MainContent/ProfileMainContent';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import ListingContextProvider from '../../../../contexts/ListingContext';
import CrossPost from './CrossPost';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <EditPostContextProvider>
          <ProfileMainContent>
            <CrossPost />
          </ProfileMainContent>
        </EditPostContextProvider>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
