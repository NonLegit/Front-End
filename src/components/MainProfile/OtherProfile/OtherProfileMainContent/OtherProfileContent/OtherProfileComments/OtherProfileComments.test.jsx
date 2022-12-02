import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Comments from './OtherProfileComments';
import MainContent from '../../OtherProfileMainContent';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><MainContent><Comments /></MainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
