import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileMainContent from '../../Profile/MainContent/ProfileMainContent';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import ListingContextProvider from '../../../../contexts/ListingContext';
import CrossPost from './CrossPost';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <EditPostContextProvider>
          <ProfileMainContent>
            <CrossPost />
          </ProfileMainContent>
        </EditPostContextProvider>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
