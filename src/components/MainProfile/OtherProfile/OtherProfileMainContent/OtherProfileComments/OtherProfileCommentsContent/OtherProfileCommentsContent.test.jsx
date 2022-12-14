import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CommentsContent from './OtherProfileCommentsContent';
import MainProfile from '../../../../MainProfile';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainProfile><CommentsContent /></MainProfile></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
