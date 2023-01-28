import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
// import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import EditPostContextProvider from '../../contexts/EditPostContext';
import HiddenPostsContextProvider from '../../contexts/HiddenPostsContext';
import theme from '../../styles/theme';
import Post from './Post';

describe(Post, () => {
  it('Reactions renders correctly', () => {
    const testCase = JSON.parse(`{
        "_id": "63a039107e9602e5da79ac42",
        "ownerType": "User",
        "replies": [
            "63a03c427e9602e5da79ac8b",
            "63a03c457e9602e5da79ac97",
            "63a03c4a7e9602e5da79aca3",
            "63a03c4c7e9602e5da79acaf"
        ],
        "title": "new Post @ 12:12",
        "kind": "self",
        "text": "<p>Edited Post</p>",
        "url": "",
        "images": [],
        "createdAt": "2022-12-19T10:06:05.781Z",
        "locked": false,
        "isDeleted": false,
        "sendReplies": true,
        "nsfw": false,
        "spoiler": false,
        "votes": 0,
        "views": 0,
        "commentCount": 4,
        "shareCount": 0,
        "suggestedSort": "new",
        "scheduled": false,
        "modState": "unmoderated",
        "spamCount": 0,
        "spammedBy": [],
        "sortOnHot": 835722182890.5,
        "sortOnBest": 668577746312.4,
        "__v": 0,
        "owner": {
            "_id": "639f824cd9f48a8d75a21aa4",
            "name": "Basma",
            "icon": "https://api.nonlegit.click/users/default.png"
        },
        "author": {
            "_id": "639f824cd9f48a8d75a21aa4",
            "name": "Basma"
        },
        "isSaved": false,
        "postVoteStatus": 0,
        "isSpam": false
      }`);
    const {
      _id: id, createdAt, title, images, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, video, ownerType, postVoteStatus, isSaved, url, nsfw, spoiler,
      sharedFrom,
    } = testCase;
    const tree = renderer
      .create(
        <Router>
          <HiddenPostsContextProvider>
            <EditPostContextProvider>
              <ThemeProvider theme={theme}>
                <Post
                  postVoteStatus={postVoteStatus || 0}
                  createdAt={createdAt}
                  title={title}
                  ownerIcon={ownerIcon}
                  ownerName={ownerName}
                  authorName={authorName}
                  flairText={flairText}
                  flairBackgroundColor={flairBackgroundColor}
                  flairColor={flairColor}
                  images={images}
                  video={video}
                  kind={kind}
                  votes={votes}
                  commentCount={commentCount}
                  text={text}
                // eslint-disable-next-line react/no-array-index-key
                  ownerType={ownerType}
                  isSaved={isSaved}
                  postId={id}
                  url={url}
                  nsfw={nsfw}
                  spoiler={spoiler}
                  sharedFrom={sharedFrom}
                />
              </ThemeProvider>
            </EditPostContextProvider>
          </HiddenPostsContextProvider>
        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
