import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../../OtherProfileMainContent';
import OtherProfileFilterFull from './OtherProfileFilterFull';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><OtherProfileMainContent><OtherProfileFilterFull /></OtherProfileMainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
