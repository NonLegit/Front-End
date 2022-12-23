import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfilePostFooter from './OtherProfilePostFooter';
import EditPostContextProvider from '../../../../../../contexts/EditPostContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <EditPostContextProvider>
        <OtherProfilePostFooter />
      </EditPostContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
