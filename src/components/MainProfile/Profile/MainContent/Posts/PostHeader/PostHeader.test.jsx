import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainProfile from '../../../../MainProfile';
import PostHeader from './PostHeader';
import ListingContextProvider from '../../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <PostHeader />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
