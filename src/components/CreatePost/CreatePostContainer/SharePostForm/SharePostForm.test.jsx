import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import PostTypeContextProvider from '../../../../contexts/PostTypeContext';
import SharePostForm from './SharePostForm';

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = jest.fn();
  React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

test('CreatePostForm', () => {
  useContextMock.mockReturnValue([]);
  const element = new ShallowRenderer().render(
    <PostTypeContextProvider>
      <SharePostForm />
    </PostTypeContextProvider>,
  );
  expect(element.props.children).not.toBeNull();
});
