import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Email from './Email';
// test snapshot
test('Email snapshot', async () => {
  render(<Email />);
  const tree = renderer.create(<Email />).toJSON();
  expect(tree).toMatchSnapshot();
});
