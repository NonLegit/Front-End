import { useState, useEffect, useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useNavigate } from 'react-router-dom';
import {
  ControlsIcon,
  CustomImage,
  ParagraphBox,
  ParagraphPost,
  ParagraphWhite,
  PostMedia,
} from '../styles';
import { useEditPostContext } from '../../../../contexts/EditPostContext';

function PostBody({ post, isSpoiler }) {
  const [maxImagesHeight, setMaxImagesHeight] = useState(450);

  // refs
  const postTextRef = useRef();
  const postMediaRef = useRef();

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  useEffect(() => {
    console.log(post.images);
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

  const [index, setIndex] = useState(0);
  const handleDirection = (dir) => {
    setIndex(index + dir);
  };

  return (
    <PostMedia
      mt={1.5}
      kind={post?.kind}
      ref={postMediaRef}
      spoiler={isSpoiler}
      sx={{ marginLeft: 2, maxWidth: '90%' }}
    >
      {post?.kind === 'video' ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls style={{ width: '1000%', maxHeight: '512px' }} onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}>
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
                      onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}
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
            onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}
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

  );
}

export default PostBody;
