import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OtherProfileMainContent from '../OtherProfileMainContent';
import OtherProfilePostsTap from './OtherProfilePostsTap';
import ListingContextProvider from '../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <OtherProfileMainContent>
          <OtherProfilePostsTap />
        </OtherProfileMainContent>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
