import { useEffect } from 'react';

// MUI components
import {
  Typography, Button, IconButton,
} from '@mui/material';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import ArticleIcon from '@mui/icons-material/Article';

// Components
import VoteIcon from '../../VoteIcons/VoteIcon/VoteIcon';
// import VotedIcon from '../../VoteIcons/VotedIcon/VotedIcon';

// Contexts
import { usePostContext } from '../../../contexts/PostContext';

// Styles
import { HeaderVerticalDivider, MultiLevelHeaderBox, MultiLevelHeaderVotes } from './styles';

// Theme
import theme from '../../../styles/theme';

function MultiLevelHeader() {
  // Context
  const { post } = usePostContext();

  // useEffect
  useEffect(() => {
    // Add This post to the History
    if (post) {
      // isHidden
      const savedPost = (({
        _id, author, owner, ownerType,
        title, kind,
        text, url, votes, commentCount, views, createdAt, suggestedSort, nsfw, spoiler,
        sendReplies, locked, flairId, flairText, postVoteStatus, isSaved, isHidden, modState, sharedFrom, shareCount, images, video, sortOnHot,
      }) => ({
        _id,
        author,
        owner,
        ownerType,
        title,
        kind,
        text,
        url,
        votes,
        commentCount,
        views,
        createdAt,
        suggestedSort,
        nsfw,
        spoiler,
        sendReplies,
        locked,
        flairId,
        flairText,
        postVoteStatus,
        isSaved,
        isHidden,
        modState,
        sharedFrom,
        shareCount,
        images,
        video,
        sortOnHot,
      }))(post);
      savedPost.isHidden = false;
      console.log('Saved Post');
      console.log(savedPost);

      // Push This post to Hiistory in the local storage
      // const history = [];
      // history.push(JSON.parse(localStorage.getItem('RedditHistory')));
      // history.push(savedPost);
      localStorage.setItem('RedditHistory', JSON.stringify(savedPost));
    }
  }, [post]);

  const close = () => {
    // Back to previous Page [Windows History]
    console.log('Closed');
  };

  const upVote = () => {
    console.log('UpVote');
  };

  const downVote = () => {
    console.log('DownVote');
  };
  return (
    <MultiLevelHeaderBox>
      <MultiLevelHeaderVotes>
        {/* <Divider orientation="vertical" flexItem /> */}
        <HeaderVerticalDivider orientation="vertical" flexItem />
        <IconButton onClick={upVote}>
          <VoteIcon
            color={theme.palette.secondary?.main}
            direction="up"
          />
        </IconButton>
        <Typography variant="p">{post?.votes}</Typography>
        <IconButton onClick={downVote}>
          <VoteIcon
            color={theme.palette.secondary?.main}
            direction="down"
          />
        </IconButton>
        <HeaderVerticalDivider orientation="vertical" flexItem />
        {/* <VotedIcon
          color={theme.palette.secondary?.main}
          direction="down"
        /> */}
        <ArticleIcon />
        <Typography variant="p" fontSize="14px">{post?.title}</Typography>
      </MultiLevelHeaderVotes>
      <Button variant="text" startIcon={<CloseIcon fontSize="small" />} color="third" onClick={close}>Close</Button>

    </MultiLevelHeaderBox>
  );
}

export default MultiLevelHeader;
