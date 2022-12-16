import { Box } from '@mui/material';
import {
  useState, useEffect, useContext, useRef,
} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Comments from '../Comments/Comments';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostSide from './PostSide/PostSide';
import {
  actionOnPost, moderationAction,
} from '../profileServer';
import {
  ControlsIcon,
  CustomImage,
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
import { CommunitiesContext } from '../../../contexts/CommunitiesModeratorContext';
import { CommunitiesSubscriberContext } from '../../../contexts/CommunitiesSubscriberContext';

/**
 * Posts component represents an entity component
 *
 * @component Posts
 * @property {object} post -post entity
 * @returns {React.Component} Posts
 */
function Posts(props) {
  const { post, condition, profile } = props;

  const [isNsfw, setIsNsfw] = useState(post?.nsfw);
  const [isSpoiler, setIsSpoiler] = useState(post?.spoiler);
  const [isLocked, setIsLocked] = useState(post?.locked);
  const [modState, setModState] = useState(post?.modState);

  const { communities } = useContext(CommunitiesContext);
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  const [mod, setMod] = useState(false);

  const [notJoined, setNotJoined] = useState(false);

  useEffect(() => {
    console.log(post?.kind);
    if (communitiesSubscriber?.filter((element) => element.fixedName === post.owner.name).length === 0) {
      setNotJoined(true);
    }
  }, [post, communitiesSubscriber]);

  useEffect(() => {
    if (post.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === post.owner.name).length > 0) {
      setMod(true);
    }
  }, [communities, post]);

  const handleNsfw = () => {
    actionOnPost(post?.postid, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    actionOnPost(post?.postid, isSpoiler ? 'unspoiler' : 'spoiler');
    setIsSpoiler((prev) => !prev);
  };
  const handleLock = () => {
    actionOnPost(post?.postid, isLocked ? 'unlock_comments' : 'lock_comments');
    setIsLocked((prev) => !prev);
  };
  const handleApprove = () => {
    moderationAction(post?.postid, 'approve');
    setModState('approved');
  };
  const handleRemove = () => {
    moderationAction(post?.postid, 'remove');
    setModState('removed');
  };
  const handleSpam = () => {
    moderationAction(post?.postid, 'spam');
    setModState('spammed');
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

  return (
    <>
      <PostsQueueBox condition={condition}>
        <PostSide postid={post?._id} points={post?.votes} postVoteStatus={post?.postVoteStatus} />
        <PostContentBox>
          <Box sx={{ marginLeft: 1 }}>
            <PostHeader
              type={post?.ownerType}
              subReddit={post?.owner?.name}
              icon={post?.owner?.icon}
              nameUser={post?.author?.name}
              Time={post?.createdAt}
              locked={isLocked}
              modState={modState}
              notJoined={notJoined}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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

            {/* eslint-disable jsx-a11y/media-has-caption */}
            {!isNsfw && (
            <PostMedia
              mt={1.5}
              kind={post?.kind}
              ref={postMediaRef}
              spoiler={isSpoiler}
              sx={{ marginLeft: 2, maxWidth: '90%' }}
            >
              {post?.kind === 'video' ? (
                <video controls style={{ width: '1000%', maxHeight: '512px' }}>
                  <source src={post?.videos} type="video/mp4" />
                </video>
              ) : (
                (post?.kind === 'image')
                  ? (
                    <>
                      {post?.images.map((image, imageIndex) => {
                        console.log('my imageshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkk', image);
                        return (
                          imageIndex === index
                    && (
                    <CustomImage
                      src={image.path}
                      alt="post image"
                      key={image}
                      maxHeight={maxImagesHeight}
                    />
                    )
                        );
                      })}
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
                    >
                      <ParagraphWhite />
                      <ParagraphPost
                        data-testid="post-body"
                        dangerouslySetInnerHTML={{ __html: post?.text }}
                      />
                    </ParagraphBox>
                  // <PostText
                  //   ref={postTextRef}
                  //   maxHeight={displayShadow ? maxTextHeight : 'none'}
                  // >
                  //   {displayShadow && <PostTextContainer />}
                  //   <div dangerouslySetInnerHTML={{ __html: text }} />
                  // </PostText>
                  ))
              )}
            </PostMedia>
            )}

            <PostFooter
              postid={post?._id}
              isSaved={post?.isSaved}
              subTitle={post?.ownerType}
              numComments={post?.commentCount}
              sendReplies={post?.sendReplies}
              mod={mod}
              profile={profile}
              nsfw={isNsfw}
              spoiler={isSpoiler}
              locked={isLocked}
              modState={modState}
              handleLock={handleLock}
              handleSpoiler={handleSpoiler}
              handleNsfw={handleNsfw}
              handleApprove={handleApprove}
              handleRemove={handleRemove}
              handleSpam={handleSpam}
            />
          </Box>
        </PostContentBox>
      </PostsQueueBox>
      {post?.comments
        && <Comments entity={post} noheader={condition} profile={profile} overview="true" />}
    </>
  );
}

export default Posts;
