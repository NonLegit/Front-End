import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import MultiLevel from '../../../MultiLevel';
import Comment from './Comment';

// test snapshot
test('Comment-test-snapshot', async () => {
  const comment = {
    _id: '63a0463d7e9602e5da79af52',
    author: {
      _id: '639f824cd9f48a8d75a21aa4',
      userName: 'Basma',
      profilePicture: 'https://api.nonlegit.click/users/default.png',
      profileBackground: 'https://api.nonlegit.click/users/defaultcover.png',
    },
    post: '63a03f6d7e9602e5da79ad79',
    mentions: [],
    replies: [],
    parent: '63a0460f7e9602e5da79af0b',
    parentType: 'Comment',
    text: '<p>Reply 4 on comment 1</p>',
    createdAt: '2022-12-19T10:06:05.768Z',
    isDeleted: false,
    votes: 0,
    repliesCount: 0,
    locked: false,
    nsfw: false,
    spoiler: false,
    modState: 'unmoderated',
    sortOnHot: 835722182884,
    __v: 0,
  };

  const tree = renderer.create(
    <Router>
      <MultiLevel>
        <Comment commentprop={comment} />
      </MultiLevel>
    </Router>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
