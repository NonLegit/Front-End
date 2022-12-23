import renderer from 'react-test-renderer';
import ExploreHeader from './ExploreHeader';
import HeaderSubtitleContextProvider from '../../../contexts/HeaderSubtitleContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <HeaderSubtitleContextProvider>
      <ExploreHeader />
    </HeaderSubtitleContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
