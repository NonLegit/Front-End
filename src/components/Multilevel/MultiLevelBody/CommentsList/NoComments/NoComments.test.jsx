import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import NoComments from './NoComments';

// Check for Text To be in the Page
test('NoComments-Text-Render', async () => {
  render(<NoComments />);
  expect(screen.queryByText('No Comments Yet')).toBeInTheDocument();
  expect(screen.queryByText('Be the first to share what you think!')).toBeInTheDocument();
});

// test snapshot
test('NoComments-test-snapshot', async () => {
  const tree = renderer.create(<NoComments />).toJSON();
  expect(tree).toMatchSnapshot();
});
