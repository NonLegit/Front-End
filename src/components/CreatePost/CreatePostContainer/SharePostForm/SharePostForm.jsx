import {
  Box, Divider,
} from '@mui/material';
import '../../../../styles/theme/textEditor.css';
import { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import {
  FormContainer, Title, TitleContainer, DraftsButton, Badge, CustomDivider, PostFormContainer, FieldsContainer, PostTitle, WordCounter,
} from './styles';
import PostTags from './PostTags/PostTags';
import PostSubmission from './PostSubmission/PostSubmission';
import SubredditsMenu from './SubredditsMenu/SubredditsMenu';
import { useCreatePostSidebarContext } from '../../../../contexts/CreatePostSidebarContext';
import currentSubredditServer from './currentSubredditServer';
import getPostServer from './getPostServer';
import SharedPost from '../../../Post/SharedPost/SharedPost';
import sharePostServer from './sharePostServer';

/**
 * This component is the main section off create post page which holds the form to submit posts
 *
 * @component CreatePostForm
 * @returns {React.Component} CreatePostForm
 */

function CreatePostForm(props) {
  // props
  const { postId } = props;

  // routes
  const navigate = useNavigate();
  const { subredditName } = useParams();
  // console.log(subredditName);

  // server
  const [subredditId, subredditIcon, initialOwnerType] = currentSubredditServer(subredditName);
  // console.log('component', subredditId, subredditIcon, subredditName);

  // contexts
  const {
    communityToPostIn, setCommunityToPostIn, ownerType, setOwnerType, communityName, setCommunityName,
  } = useCreatePostSidebarContext();

  // states
  const [title, setTitle] = useState('');
  const [spoiler, setSpoiler] = useState(false);
  const [nswf, setNswf] = useState(false);
  const [sendReplies, setSendReplies] = useState(true);
  const [flair, setFlair] = useState(null);

  const [parentPost, error] = getPostServer(postId);

  useEffect(() => {
    setCommunityToPostIn(subredditId);
    setOwnerType(initialOwnerType);
    setCommunityName(subredditName);
  }, []);
  useEffect(() => {
    setCommunityToPostIn(subredditId);
  }, [subredditId]);
  useEffect(() => {
    if (parentPost) {
      setTitle(parentPost.title);
    }
  }, [parentPost]);
  /**
   * This function check if server should send email to user as a reply to the post
   */
  const handleSendReplies = (e) => {
    setSendReplies(e.target.checked);
  };
  // handlers

  /**
   * This function send post request to create post
   */
  const handlePost = (e) => {
    e.preventDefault();
    console.log('share', e);
    const post = {
      title,
      owner: communityToPostIn,
      ownerType,
      spoiler,
      nswf,
      sendReplies,
      flairId: flair?.id,
      flairText: flair?.text,
      sharedFrom: postId,
    };
    console.log('el post', post);
    sharePostServer(post, navigate);
  };
  /**
   * This function handles title change
   */
  const handleTitleChange = (e) => {
    setTitle(e.target.value.substr(0, Math.min(300, e.target.value.length)));
  };
  /**
   * This function handles post text change
   */
  const handleSaveDraft = (e) => {
    e.preventDefault();
  };
  /**
   * This function prevents user from type Enter in input fields
   */
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  /**
   * This function handles if post is spoiler or not
   */
  const hanldeSpoiler = () => {
    setSpoiler(!spoiler);
  };
  /**
   * This function handles if post is not safe for work or not
   */
  const hanldeNsfw = () => {
    setNswf(!nswf);
  };

  return (
    !error && parentPost
      ? (
        <FormContainer>
          <TitleContainer my={2}>
            <Title variant="h6">
              Create a post
            </Title>
            <DraftsButton color="third" padding="4px 16px" fontSize={12} fontWeight="bold">
              drafts
              <Badge>
                0
              </Badge>
            </DraftsButton>
          </TitleContainer>
          <CustomDivider />
          <SubredditsMenu
            setCommunityToPostIn={setCommunityToPostIn}
            setOwnerType={setOwnerType}
            subredditIcon={subredditIcon}
            subredditName={subredditName}
            ownerType={ownerType}
            communityName={communityName}
            setCommunityName={setCommunityName}
            setFlair={setFlair}
          />
          <PostFormContainer>
            <FieldsContainer>
              <Box
                position="relative"
                display="flex"
                flexDirection="column"
                marginBottom={2}
              >
                <PostTitle
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                  onKeyDown={handleEnter}
                />
                <WordCounter>
                  {title?.length}
                  /300
                </WordCounter>
              </Box>
              <SharedPost sharedFrom={parentPost} />
            </FieldsContainer>
            <PostTags
              spoiler={spoiler}
              hanldeSpoiler={hanldeSpoiler}
              nswf={nswf}
              hanldeNsfw={hanldeNsfw}
              setFlair={setFlair}
              subreddit={communityName?.substring(2)}
              flair={flair}
              communityName={communityName}
            />
            <Divider />
            <PostSubmission
              handleSaveDraft={handleSaveDraft}
              handlePost={handlePost}
              readyToPost={communityToPostIn != null && title}
              handleSendReplies={handleSendReplies}
              sendReplies={sendReplies}
            />
          </PostFormContainer>
        </FormContainer>
      ) : <div>error in get the parent post</div>
  );
}

export default CreatePostForm;
