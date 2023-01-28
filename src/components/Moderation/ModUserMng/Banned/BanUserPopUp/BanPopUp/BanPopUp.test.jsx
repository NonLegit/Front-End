import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BanPopUp from './BanPopUp';
import BanUser from '../../BanUser';

test('test snapshot', async () => {
  const tree = renderer.create(<Router><BanUser><BanPopUp /></BanUser></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
