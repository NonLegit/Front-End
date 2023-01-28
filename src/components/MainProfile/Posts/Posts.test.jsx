import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainProfile from '../MainProfile';
import Posts from './Posts';
import ListingContextProvider from '../../../contexts/ListingContext';
import ProfileMainContent from '../Profile/MainContent/ProfileMainContent';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <ProfileMainContent>
            <Posts />
          </ProfileMainContent>
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
