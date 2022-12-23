import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
// import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import theme from '../../../../styles/theme';
import PostList from './PostList';
import ListingContextProvider from '../../../../contexts/ListingContext';
import PostTypeContextProvider from '../../../../contexts/PostTypeContext';
import HiddenPostsContextProvider from '../../../../contexts/HiddenPostsContext';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import CreatePostSidebarContextProvider from '../../../../contexts/CreatePostSidebarContext';

describe(PostList, () => {
  it('PostList renders correctly', () => {
    const testCase = [
      JSON.parse(`{
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
      }`),
    ];
    const tree = renderer
      .create(
        <Router>
          <CreatePostSidebarContextProvider>
            <ListingContextProvider>
              <PostTypeContextProvider>
                <HiddenPostsContextProvider>
                  <EditPostContextProvider>
                    <ThemeProvider theme={theme}>
                      <PostList
                        posts={testCase}
                      />
                    </ThemeProvider>
                  </EditPostContextProvider>
                </HiddenPostsContextProvider>
              </PostTypeContextProvider>
            </ListingContextProvider>
          </CreatePostSidebarContextProvider>

        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
