import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainProfile from '../MainProfile';
import Posts from './Posts';
import ListingContextProvider from '../../../contexts/ListingContext';
import ProfileMainContent from '../Profile/MainContent/ProfileMainContent';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <ProfileMainContent>
            <Posts />
          </ProfileMainContent>
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
