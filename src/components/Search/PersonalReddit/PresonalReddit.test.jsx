import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import PersonalReddit from './PersonalReddit';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Router><PersonalReddit /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
