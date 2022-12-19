/* eslint-disable no-unused-vars */
// MUI Components
import { Box } from '@mui/material';

// Components
import { useEffect } from 'react';
// import Reactions from '../../Post/Reactions/Reactions';
import CommentsList from './CommentsList/CommentsList';
import MultiLevelPostContent from './MultiLevelPostContent/MultiLevelPostContent';

// Context
import { usePostContext } from '../../../contexts/PostContext';

// Styles
import { MultiLevelBodyConatiner, PostContainer } from './styles';

function MultiLevelBody({ Edit, Comment }) {
  // Context
  const { post } = usePostContext();
  useEffect(() => {
    console.log('MultiLevelBody.jsx', post);
    console.log('MultiLevelBody.jsx Edit', Edit);
    console.log(post);
    console.log('from multilevel', post?.postVoteStatus, post?._id);
  }, [post]);
  return (
    post
    && (
    <MultiLevelBodyConatiner>
      <PostContainer>
        {/* Reactions */}
        {/* <Reactions
          flexDirection="column"
          votes={post?.votes}
          postVoteStatus={post?.postVoteStatus}
          postId={post?._id}
          viewpost
        /> */}

        <Box width="42px" height="100%" />

        <MultiLevelPostContent Edit={Edit} Comment={Comment} />
      </PostContainer>
      <CommentsList />
    </MultiLevelBodyConatiner>
    )
  );
}

export default MultiLevelBody;
