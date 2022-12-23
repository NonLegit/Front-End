import renderer from 'react-test-renderer';
import CommunitiesContainer from './CommunitiesContainer';
import HeaderSubtitleContextProvider from '../../../contexts/HeaderSubtitleContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <HeaderSubtitleContextProvider>
      <CommunitiesContainer title="sports" />
    </HeaderSubtitleContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
