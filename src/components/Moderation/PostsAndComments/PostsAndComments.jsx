import { Box, Typography } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';

import { useParams } from 'react-router-dom';
import patchData from '../../SubReddit/SideBar/Mderation/ModerationServer';
import FormDialog from '../../HomePage/HomePageContainer/PersonalReddit/PopUpSubReddit/PopUp';
import getSubredditAllData from '../../SubReddit/SubrridetDataServer';
import PostType from './PostType/PostType';
import {
  AboutString, AboutSubString, Add, AddFlair, BackHomeButton, Container,
  Disc, FlexBox, FlexBoxColumn, LeftAlighne, NotFoundBox, NotFountImage, SortString, TotalContainer,
} from './style';
import SuggestionSort from './SuggestionSort/SuggestionSort';

/**
 * Posts And Comments
 * @component
 * @property  {function} redirect redirect to home page
 * @property  {function} createCommunity show create community form
 * @property  {function} SendData send data to backend
 *
 * @return {React.Component} - Posts And Comments
 */

function PostsAndComments() {
  const { subReddit } = useParams();
  const [exist, setExist] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [allowImgs, setallowImgs] = useState(false);
  const [allowVideos, setallowVideos] = useState(false);
  const [allowLinks, setallowLinks] = useState(false);
  const [suggestedSort, setSuggestedSort] = useState('');

  const [data, dataError, statusCode] = getSubredditAllData(subReddit);
  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value, data);
  useEffect(() => {
    if (statusCode === 404) {
      setExist(false);
    }
    setallowImgs(data?.allowImgs);
    setallowVideos(data?.allowVideos);
    setallowLinks(data?.allowLinks);
    setSuggestedSort(data?.suggestedSort);
    console.log(suggestedSort);
  }, [data, statusCode]);

  const redirect = () => {
    window.location.pathname = '/';
  };

  const createCommunity = async () => {
    await setShowPopUp(true);
    const ele = document.getElementById('popup-form-button');
    ele.click();
  };
  const SendData = () => {
    patchData(subReddit, {
      allowImgs,
      allowVideos,
      allowLinks,
      suggestedSort,
    }); // fetch api
  };
  return (
    exist
      ? (
        <TotalContainer>
          <AddFlair><Add onClick={SendData}>Save Change</Add></AddFlair>
          <LeftAlighne>
            <Container>
              <AboutString>
                Posts and Comment settings
              </AboutString>
              <Disc sx={{ marginTop: '20px' }}>Comments</Disc>
              <FlexBox>
                <FlexBoxColumn>
                  <SortString>
                    Suggested sort
                  </SortString>
                  <Disc>All comment feeds in community will default to this sort setting</Disc>
                </FlexBoxColumn>
                {suggestedSort
                && <SuggestionSort suggestedSort={suggestedSort} setSuggestedSort={setSuggestedSort} />}
              </FlexBox>
              <Disc>posts</Disc>

              <AboutSubString>
                Post type options
              </AboutSubString>

              <PostType allowImgs={allowImgs} allowVideos={allowVideos} allowLinks={allowLinks} setallowImgs={setallowImgs} setallowVideos={setallowVideos} setallowLinks={setallowLinks} />

            </Container>
          </LeftAlighne>
        </TotalContainer>
      ) : (
        <NotFoundBox>
          <NotFountImage src="https://www.redditstatic.com/desktop2x/img/snoomoji/snoo_thoughtful.png" />
          <Typography sx={{ fontWeight: 700, marginBottom: 2, fontSize: '18px' }}>Sorry, there aren’t any communities on Reddit with that name.</Typography>
          <Typography sx={{ marginBottom: 4, fontSize: '14px' }}>This community may have been banned or the community name is incorrect.</Typography>
          <Box>
            <BackHomeButton variant="outlined" onClick={createCommunity} sx={{ textTransform: 'unset' }}>Create community</BackHomeButton>
            <BackHomeButton variant="contained" onClick={redirect}>Go Home</BackHomeButton>
          </Box>
          {showPopUp && <Box sx={{ display: 'absolute' }}><FormDialog display="none" /></Box>}
        </NotFoundBox>
      )
  );
}
export default PostsAndComments;
