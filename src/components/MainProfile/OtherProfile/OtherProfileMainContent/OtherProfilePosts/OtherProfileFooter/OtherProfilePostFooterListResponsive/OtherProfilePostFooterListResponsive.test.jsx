import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import OtherProfilePostFooterListResponsive from './OtherProfilePostFooterListResponsive';

test('test snapshot', async () => {
  const tree = renderer.create(
    <OtherProfilePostFooterListResponsive />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
