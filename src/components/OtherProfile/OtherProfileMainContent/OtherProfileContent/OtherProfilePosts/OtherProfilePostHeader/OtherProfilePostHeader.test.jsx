import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../../../OtherProfileMainContent';
import OtherProfilePostHeader from './OtherProfilePostHeader';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><OtherProfileMainContent><OtherProfilePostHeader /></OtherProfileMainContent></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
