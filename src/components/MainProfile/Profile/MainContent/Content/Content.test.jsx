import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainProfile from '../../../MainProfile';
import Content from './Content';
import ListingContextProvider from '../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <Content />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
