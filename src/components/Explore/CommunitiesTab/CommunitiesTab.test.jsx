import renderer from 'react-test-renderer';
import CommunitiesTab from './CommunitiesTab';
import HeaderSubtitleContextProvider from '../../../contexts/HeaderSubtitleContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <HeaderSubtitleContextProvider>
      <CommunitiesTab title="sports" />
    </HeaderSubtitleContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
