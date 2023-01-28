/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';

// MUI components
import { Typography } from '@mui/material';

// Components
import EditPost from './EditPost/EditPost';
import PostStatistics from './PostStatistics/PostStatistics';
import CreateComment from './CreateComment/CreateComment';
import Posts from '../../../MainProfile/Posts/Posts';

// Context
import { usePostContext } from '../../../../contexts/PostContext';
import CommunitiesProvider from '../../../../contexts/CommunitiesModeratorContext';
import CommunitiesSubscriberProvider from '../../../../contexts/CommunitiesSubscriberContext';

// Styles
import { MultiLevelContentConatiner, PostHeader } from './styles';
import { AuthorLink, ImgAvatar } from '../CommentsList/Comment/styles';

// Utlis
import calculateTime from '../../../../utils/calculateTime';

/* The Main Content of the post including Actions */

/**
 * MultiLevelPostContent Upper Part of the Post Body Including Post Actions
 * @property {boolean}Edit --Whether this post in Edit post text State or Not[is Text Editor Appearing or Not]
 * @property {boolean}Comment --For Initial Scrolling of the Post whther to be @ top or to the Comments Section
 *
 * @returns {React.Component} --MultiLevelBody Component
 */
function MultiLevelPostContent(props) {
  const { Edit, Comment } = props;

  // useState
  const [Editprop, setEdit] = useState();
  const [Commentprop, setComment] = useState();

  // Context
  const { post } = usePostContext();

  // Constants
  const authorProfilelink = `/user/${post?.author?.name}`;
  const ownerProfilelink = (post?.ownerType === 'User') ? `/user/${post?.owner?.name}` : `/r/${post?.owner?.name}`;

  const ref = useRef(null);
  useEffect(() => {
    setEdit(Edit);
    setComment(Comment);
    window.scrollTo(0, 0);
    if (Commentprop) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    console.log('Post text ', post?.text);
    console.log('Divvvvvvv', <div dangerouslySetInnerHTML={{ __html: post?.text }} />);
  }, [Edit, Comment]);

  return (
    <MultiLevelContentConatiner>
      <CommunitiesProvider>
        <CommunitiesSubscriberProvider>
          <div style={{ marginLeft: '-45px' }}>
            <Posts post={post} profile nohover />
          </div>
        </CommunitiesSubscriberProvider>
      </CommunitiesProvider>

      {/* MultiLevelPostContent
      {' '}
      {Edit}
      {' '}
      Value */}
      {/* Owner Authoer */}
      {/* PostHeader */}
      {/* <PostHeader>
        <ImgAvatar alt={post?.owner?.name} src={post?.owner?.icon} />
        <Typography fontSize="12px" fontWeight="400">
          <AuthorLink href={ownerProfilelink}>
            {post?.ownerType === 'User' ? 'u' : 'r'}
            /
            {post?.owner?.name}
          </AuthorLink>
        </Typography>

        <Typography fontSize="12px" fontWeight="400">
          Posted by
          {' '}
          <AuthorLink href={authorProfilelink}>
            u/
            {post?.author?.name}
          </AuthorLink>
        </Typography>

        <Typography fontSize="12px" fontWeight="400">
          {calculateTime(post?.createdAt)}
        </Typography>
      </PostHeader> */}

      {/* Title */}
      {/* <Typography variant="h1" fontSize="20px" fontWeight="600">{post?.title}</Typography> */}
      {/* <h1>
        Helooo
        {post?.text}
      </h1> */}
      {Editprop ? <EditPost setEdit={setEdit} /> : null}
      {/* Post Actions Bar */}
      {/* Post Insights */}
      {/* Post Statistics */}
      {/* Create Comment */}
      {/* // ref={ref}
        // style={{ scrollMargin: '100px 0px 0px 0px' }}
       */}
      <PostStatistics />

      <div
        ref={ref}
        style={{ scrollMargin: '110px 0px 0px 0px' }}
      >
        <CreateComment />
      </div>

    </MultiLevelContentConatiner>
  );
}

export default MultiLevelPostContent;
