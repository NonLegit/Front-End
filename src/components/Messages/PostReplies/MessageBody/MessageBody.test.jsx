import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/system';
import MessageBody from './MessageBody';
import theme from '../../../../styles/theme';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
// test snapshot
test('test snapshot', () => {
  const props = {
    Message: {
      _id: '639d0de38957d750a8eee91a',
      type: 'postReply',
      from: {
        _id: '638bed0c01f496d7284c281a',
        userName: 'Eslam',
      },
      to: {
        _id: '638bed0901f496d7284c2810',
        userName: 'Fady',
      },
      createdAt: '2022-12-19T00:26:05.666Z',
      isRead: false,
      isDeletedInSource: false,
      isDeletedInDestination: false,
      subreddit: {
        _id: '63a16a2f5ded3e931da85214',
        fixedName: 'BNHA',
        name: 'BNHA',
        rules: [],
        icon: 'http://localhost:8000/undefined',
        backgroundImage: 'http://localhost:8000/undefined',
      },
      comment: {
        _id: '639d0de38957d750a8eee914',
        parent: '6397350b02c3e344ea207064',
        text: 'fady is going to school',
      },
    },
    index: 0,
    replies: [],
    setReplies: '',
  };
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <MessageBody {...props} />
      ,
    </ThemeProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
