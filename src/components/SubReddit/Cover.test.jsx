import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from '../../App';
import Cover from './Cover';

// // test snapshot
// test('test snapshot', async () => {
//   const tree = renderer.create(
//     <App>
//       <Router>
//         <Cover />
//       </Router>
//     </App>,
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <Cover />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
