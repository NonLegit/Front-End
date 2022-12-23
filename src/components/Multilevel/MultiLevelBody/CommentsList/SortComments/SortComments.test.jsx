import { screen, render } from '@testing-library/react';

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import SortComments from './SortComments';

// Check on Content
// Check for Text To be in the Page
test('Sort Comments-Text-Render', async () => {
  render(<SortComments />);
  expect(screen.queryByText('Sort By:'))?.toBeInTheDocument();
});

// test snapshot
test('Sort Comments-test-snapshot', async () => {
  const tree = renderer.create(
    <SortComments />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
