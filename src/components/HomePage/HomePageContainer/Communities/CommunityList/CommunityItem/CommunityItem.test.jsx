import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityItem from './CommunityItem';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
describe(CommunityItem, () => {
  test('Community Item is in the document', () => {
    render(<CommunityItem />);
    const CommunityItemComp = screen.getByTestId('Community Item');
    expect(CommunityItemComp).toBeInTheDocument();
  });

  test('Community Item props work correctly with status up', () => {
    const testCase = {
      index: 2,
      icon: 'https://testing-library.com/img/octopus-64x64.png',
      subredditName: 'Community One',
      status: true,
    };

    render(<CommunityItem
      index={testCase.index}
      icon={testCase.icon}
      subredditName={testCase.subredditName}
      status={testCase.status}
    />);

    const CommunityItemIndex = screen.getByTestId('index');
    expect(parseInt(CommunityItemIndex.textContent, 10)).toEqual(testCase.index);
    const CommunityItemImage = screen.getByTestId('image').firstChild;
    expect(CommunityItemImage.src).toEqual(testCase.icon);
    const CommunityItemName = screen.getByTestId('name');
    expect(CommunityItemName.textContent).toEqual(`r/${testCase.subredditName}`);
    const CommunityItemStatusUp = screen.getByTestId('icon up');
    expect(CommunityItemStatusUp).toBeInTheDocument();
    const CommunityItemStatusDown = screen.queryByTestId('icon down');
    expect(CommunityItemStatusDown).not.toBeInTheDocument();
  });
});

test('Community Item props work correctly with status down', () => {
  const testCase = {
    index: 2,
    icon: 'https://testing-library.com/img/octopus-64x64.png',
    subredditName: 'Community One',
    status: false,
  };

  render(<CommunityItem
    index={testCase.index}
    icon={testCase.icon}
    subredditName={testCase.subredditName}
    status={testCase.status}
  />);

  const CommunityItemIndex = screen.getByTestId('index');
  expect(parseInt(CommunityItemIndex.textContent, 10)).toEqual(testCase.index);
  const CommunityItemImage = screen.getByTestId('image').firstChild;
  expect(CommunityItemImage.src).toEqual(testCase.icon);
  const CommunityItemName = screen.getByTestId('name');
  expect(CommunityItemName.textContent).toEqual(`r/${testCase.subredditName}`);
  const CommunityItemStatusUp = screen.queryByTestId('icon up');
  expect(CommunityItemStatusUp).not.toBeInTheDocument();
  const CommunityItemStatusDown = screen.getByTestId('icon down');
  expect(CommunityItemStatusDown).toBeInTheDocument();
});
