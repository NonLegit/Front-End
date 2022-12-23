import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainProfile from '../../../MainProfile';
import PostsTap from './PostsTap';
import ListingContextProvider from '../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <PostsTap />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
