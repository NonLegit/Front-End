import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JoinButton from './JoinButton';

describe(JoinButton, () => {
  test('Button is in the document', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    expect(joinButton).toBeInTheDocument();
  });

  test('Button displays Join Initially', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    const value = joinButton.textContent;
    expect(value).toEqual('join');
  });

  test('Button displays Join while hovering Without Clicking', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    fireEvent.mouseEnter(joinButton);
    const value = joinButton.textContent;
    expect(value).toEqual('join');
  });

  test('Click on the button when its content is "Join"', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    fireEvent.click(joinButton);
    const value = joinButton.textContent;
    expect(value).toEqual('joined');
  });

  test('Button displays leave while hovering after Clicking', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    fireEvent.click(joinButton);
    fireEvent.mouseEnter(joinButton);
    const value = joinButton.textContent;
    expect(value).toEqual('leave');
  });

  test('Button displays joined after mouse leaving', () => {
    render(<JoinButton />);
    const joinButton = screen.getByTestId('join button');
    fireEvent.click(joinButton);
    fireEvent.mouseEnter(joinButton);
    const valueBeforeLeaving = joinButton.textContent;
    expect(valueBeforeLeaving).toEqual('leave');
    fireEvent.mouseLeave(joinButton);
    const value = joinButton.textContent;
    expect(value).toEqual('joined');
  });
});
