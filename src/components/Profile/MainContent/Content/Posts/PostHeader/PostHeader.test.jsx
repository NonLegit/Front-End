import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from '../../../ProfileMainContent';
import PostHeader from './PostHeader';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><PostHeader /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
