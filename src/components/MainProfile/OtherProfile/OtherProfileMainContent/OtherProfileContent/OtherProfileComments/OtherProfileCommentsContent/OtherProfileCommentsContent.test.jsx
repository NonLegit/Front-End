import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from '../../../OtherProfileMainContent';
import CommentsContent from './OtherProfileCommentsContent';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><CommentsContent /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
