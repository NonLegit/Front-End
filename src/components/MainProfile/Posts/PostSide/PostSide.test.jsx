import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
// import MainProfile from '../../MainProfile';
import PostSide from './PostSide';
// import ListingContextProvider from '../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    // <Router>
    //   <ListingContextProvider>
    //     <MainProfile>
    <PostSide />,
    //     </MainProfile>
    //   </ListingContextProvider>
    // </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
