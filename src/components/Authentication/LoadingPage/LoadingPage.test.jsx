import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Loading from './LoadingPage';

// test snapshot
test('Loading Page SnapShot', async () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
