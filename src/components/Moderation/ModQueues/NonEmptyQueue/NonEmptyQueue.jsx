import { Box } from '@mui/material';
import {
  useEffect, useContext, useState, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PostHeader from '../../../MainProfile/Posts/PostHeader/PostHeader';
import { actionOnPost, moderationAction, postReactionsServer } from '../../../MainProfile/profileServer';

import { CommunitiesSubscriberContext } from '../../../../contexts/CommunitiesSubscriberContext';
import { useEditPostContext } from '../../../../contexts/EditPostContext';
import FooterQueue from './FooterQueue/FooterQueue';
import SideBarQueue from './SideBarQueue/SideBarQueue';

// import Arrow from './arrow.svg';
import {
  ControlsIcon,
  CustomImage,
  FilterText,
  Flair,
  ParagraphBox,
  ParagraphPost,
  ParagraphWhite,
  PostContentBox,
  PostMedia,
  PostsQueueBox,
  TagPost,
  TitlePost,
} from './styles';

function NonEmptyQueue(props) {
  const {
    post, profile,
  } = props;

  const [isNsfw, setIsNsfw] = useState(post?.nsfw);
  const [isSpoiler, setIsSpoiler] = useState(post?.spoiler);
  const [isLocked, setIsLocked] = useState(post?.locked);
  const [modState, setModState] = useState(post?.modState);
  const [hidden, setHidden] = useState(post?.isHidden);

  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  const [notJoined, setNotJoined] = useState();

  useEffect(() => {
    console.log(post?.locked);
    setIsSpoiler(post?.spoiler);
    if (communitiesSubscriber && communitiesSubscriber?.filter((element) => element.fixedName === post.owner.fixedName).length === 0) {
      setNotJoined(true);
    } else setNotJoined(false);
  }, [post, communitiesSubscriber]);

  const handleNsfw = () => {
    actionOnPost(post?._id, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };

  const handleLock = () => {
    actionOnPost(post?._id, isLocked ? 'unlock_comments' : 'lock_comments');
    setIsLocked((prev) => !prev);
  };
  const handleApprove = () => {
    moderationAction(post?._id, 'approve');
    setModState('approved');
  };
  const handleRemove = () => {
    moderationAction(post?._id, 'remove');
    setModState('removed');
  };
  const handleSpam = () => {
    moderationAction(post?._id, 'spam');
    setModState('spammed');
  };

  const handleHide = () => {
    postReactionsServer(post?._id, !hidden ? 'hide' : 'unhide', 1);
    setHidden((prev) => !prev);
  };

  const [maxImagesHeight, setMaxImagesHeight] = useState(450);

  // refs
  const postTextRef = useRef();
  const postMediaRef = useRef();

  const [index, setIndex] = useState(0);

  const handleDirection = (dir) => {
    setIndex(index + dir);
  };

  useEffect(() => {
    console.log(post?.postVoteStatus);
    post.images?.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setMaxImagesHeight((maxImagesHeight) => {
          console.log('rakam', postMediaRef?.current?.offsetWidth);
          const maxValue = Math.min(maxImagesHeight, img.height);
          const postWidth = postMediaRef?.current?.offsetWidth;
          if (maxImagesHeight > img.height && img.width > postWidth) {
            return img.height * (postWidth / img.width);
          }
          return maxValue;
        });
        console.log('my img height', img.height);
      };
    });
  }, []);

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <PostsQueueBox>
      <SideBarQueue postid={post?._id} points={post?.votes} subTitle={post?.postVoteStatus} />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader
            type={post?.ownerType}
            subReddit={post?.owner?.fixedName}
            icon={post?.owner?.icon}
            nameUser={post?.author?.userName}
            Time={post?.createdAt}
            locked={isLocked}
            modState={modState}
            notJoined={notJoined}
          />
          {/* <HeaderQueue subTitle={subTitle} /> */}

          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}>
            <TitlePost variant="h6">{post?.title}</TitlePost>
            {isSpoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
            {isNsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
            {post?.flairId?.text
                && (
                <Flair
                  disableripple
                  backgroundcolor={post?.flairId?.backgroundColor}
                  flaircolor={post?.flairId?.textColor}
                >
                  {post?.flairId?.text}
                </Flair>
                )}

          </Box>
          {!isNsfw && (
          <PostMedia
            mt={1.5}
            kind={post?.kind}
            ref={postMediaRef}
            spoiler={isSpoiler}
            sx={{ marginLeft: 2, maxWidth: '90%' }}
          >
            {post?.kind === 'video' ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
              <video controls style={{ width: '1000%', maxHeight: '512px' }} onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}>
                <source src={post?.videos} type="video/mp4" />
              </video>
            ) : (
              (post?.kind === 'image')
                ? (
                  <>
                    {post?.images.map((image, imageIndex) => (
                      imageIndex === index
                    && (
                    <CustomImage
                      src={image}
                      alt="post image"
                      key={image}
                      maxHeight={maxImagesHeight}
                      onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}
                    />
                    )
                    ))}
                    <>
                      <ControlsIcon
                        disableRipple
                        left={10}
                        display={index === 0 ? 'none' : 'flex'}
                        sx={{
                          boxShadow: 10,
                        }}
                        color="third"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDirection(-1);
                        }}
                      >
                        <ArrowBackIosNewIcon />
                      </ControlsIcon>
                      <ControlsIcon
                        disableRipple
                        right={10}
                          // eslint-disable-next-line no-unsafe-optional-chaining
                        display={index === post?.images.length - 1 ? 'none' : 'flex'}
                        sx={{
                          boxShadow: 10,
                        }}
                        color="third"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDirection(1);
                        }}
                      >
                        <ArrowForwardIosIcon />
                      </ControlsIcon>
                    </>
                  </>
                ) : ((post.kind === 'self') && (
                <ParagraphBox
                  ref={postTextRef}
                  onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}
                >
                  <ParagraphWhite />
                  <ParagraphPost
                    data-testid="post-body"
                    dangerouslySetInnerHTML={{ __html: post?.text }}
                  />
                </ParagraphBox>
                ))
            )}
          </PostMedia>
          )}
          <Box sx={{ display: 'flex', marginTop: '15px' }}>
            <FilterText variant="caption">
              {post?.commentCount}
              {' '}
              comment
            </FilterText>
          </Box>

          <FooterQueue
            postid={post?._id}
            locked={isLocked}
            profile={profile}
            modState={modState}
            handleLock={handleLock}
            handleNsfw={handleNsfw}
            handleApprove={handleApprove}
            handleRemove={handleRemove}
            handleSpam={handleSpam}
            handleHide={handleHide}
          />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default NonEmptyQueue;
