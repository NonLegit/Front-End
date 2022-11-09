import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PostSubmission from './PostSubmission';

describe(PostSubmission, () => {
  const handleSaveDraft = jest.fn((param) => param);
  const handlePost = jest.fn((param) => param);

  afterEach(() => {
    handleSaveDraft.mockReset();
    handlePost.mockReset();
  });

  it('PostSubmission renders correctly', () => {
    const testCase = {
      handleSaveDraft, handlePost, readyToPost: true,
    };
    const tree = renderer
      .create(
        <PostSubmission
          handleSaveDraft={testCase.handleSaveDraft}
          handlePost={testCase.handlePost}
          readyToPost={testCase.readyToPost}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PostSubmission posts correctly', () => {
    const testCase = {
      handleSaveDraft, handlePost, readyToPost: true,
    };
    render(
      <PostSubmission
        handleSaveDraft={testCase.handleSaveDraft}
        handlePost={testCase.handlePost}
        readyToPost={testCase.readyToPost}
      />,
    );
    const postButton = screen.getByTestId('post button');
    expect(handlePost.mock.calls.length).toEqual(0);
    fireEvent.click(postButton);
    expect(handlePost.mock.calls.length).toEqual(1);
    fireEvent.click(postButton);
    expect(handlePost.mock.calls.length).toEqual(2);
  });

  it('Post button is disabled correctly', () => {
    const testCase = {
      handleSaveDraft, handlePost, readyToPost: false,
    };
    render(
      <PostSubmission
        handleSaveDraft={testCase.handleSaveDraft}
        handlePost={testCase.handlePost}
        readyToPost={testCase.readyToPost}
      />,
    );
    const postButton = screen.getByTestId('post button');
    expect(handlePost.mock.calls.length).toEqual(0);
    fireEvent.click(postButton);
    expect(handlePost.mock.calls.length).toEqual(0);
  });
});
