/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
import {
  HeaderVerticalDivider, MultiLevelHeaderBox, MultiLevelHeaderVotes, TopPostVotesConatiner,
} from './styles';

// Theme
import theme from '../../../styles/theme';
import { addPostToHistory } from './scripts';

/**
 * MultiLevelHeader of the Post Page with Title oof Post and Vote and Down Vote Buttons
 * @returns {React.Component} --MultiLevelHeader Component
 */
function MultiLevelHeader() {
  // Context
  const { post } = usePostContext();

  // useNavigate
  const navigate = useNavigate();
  // useEffect
  useEffect(() => {
    console.log('MultiLevelHeader.jsx', post);
    // Add This post to the History
    if (post) {
      addPostToHistory(post);
    }
  }, [post]);

  const close = () => {
    // Backward
    navigate(-1);
  };

  const upVote = () => {
    console.log('UpVote');
  };

  const downVote = () => {
    console.log('DownVote');
  };
  return (
    post
    && (
    <MultiLevelHeaderBox>
      <MultiLevelHeaderVotes>
        <TopPostVotesConatiner>
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
        </TopPostVotesConatiner>
        <ArticleIcon />
        <Typography variant="p" fontSize="14px">{post?.title}</Typography>
      </MultiLevelHeaderVotes>
      <Button variant="text" startIcon={<CloseIcon fontSize="small" />} color="third" onClick={close}>Close</Button>

    </MultiLevelHeaderBox>
    )
  );
}

export default MultiLevelHeader;
