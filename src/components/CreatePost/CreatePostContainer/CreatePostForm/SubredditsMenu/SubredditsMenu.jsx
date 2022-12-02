import {
  Box,
  ClickAwayListener,
  Divider, ListItem,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useCommunitiesInCreatePostContext } from '../../../../../contexts/CommunitiesInCreatePostContext';
import iMatcher from '../../../../../utils/iMatcher';
import numberWithCommas from '../../../../../utils/numberWithCommas';
import RedditButton from '../../../../RedditButton/RedditButton';
import {
  AvatarContainer, CommunityCategory, CustomList, DashedCircle, DropIcon, MenuContainer, MenuOuterContainer, SubredditsContainer, SubredditSearchField, CustomAvatar, CommunityName, CommunityAvatar, Members, CommunityContainer, SearchIcon, NoCommunitiesFound, ChosenCommunityIcon, ClickAwayContainer,
} from './styles';

/**
 * This component contains the menu of subreddit that the use can post in
 *
 * @component SubredditsMenu
 * @property {function} setCommunityToPostIn -Hanlding post owner (ID).
 * @property {function} setOwnerType -Hanlding post owner type (subreddit or user).
 * @property {string} subredditIcon -Subreddit icon.
 * @property {string} subredditName -Subreddit name.
 * @returns {React.Component} Container of subreddit menu
 */

function SubredditsMenu(props) {
  // props
  const {
    setCommunityToPostIn, setOwnerType, subredditIcon, subredditName,
  } = props;

  // contexts
  const { communities } = useCommunitiesInCreatePostContext();

  // states
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [communityName, setCommunityName] = useState(subredditName);
  const [chosenCommunityIcon, setChosenCommunityIcon] = useState(subredditIcon);
  const [showIcon, setShowIcon] = useState(!!subredditName);
  console.log('show icon', showIcon);
  console.log(chosenCommunityIcon);

  useEffect(() => {
    setChosenCommunityIcon(subredditIcon);
    setCommunityName(subredditName);
  }, [subredditIcon, subredditName]);

  // cookies
  const [cookies] = useCookies(['redditUser']);

  // handlers
  const handleClickOnChoose = () => {
    setOpen(true);
    setSearching(true);
    setChosenCommunityIcon(null);
    setCommunityToPostIn(null);
  };
  const handleClickAway = () => {
    setOpen(false);
    setSearching(false);
    setShowIcon(true);
  };
  const handleDrop = () => {
    if (open) {
      setSearching(true);
      setOpen(false);
    } else {
      setOpen(true);
      setSearching(true);
    }
  };
  const chooseCommunity = (communityId, communityName, icon, ownerType) => {
    setCommunityToPostIn(communityId);
    setOwnerType(ownerType);
    setCommunityName(communityName);
    setOpen(false);
    setChosenCommunityIcon(icon);
  };
  const handleCommunityNameChange = (e) => {
    setCommunityName(e.target.value);
    setChosenCommunityIcon(null);
  };
  const handleFilter = (community) => iMatcher(`r/${community.subredditName}`, communityName);
  console.log(communityName);

  // variables
  const filteredArray = communities?.filter(handleFilter);
  const filteredCommunities = filteredArray?.length === 0 ? null : filteredArray;
  const username = cookies.redditUser?.userName;
  const profileMatching = iMatcher(`u/${username}`, communityName);
  const userIcon = cookies.redditUser?.profilePicture;

  return (
    <MenuOuterContainer>
      <ClickAwayListener onClickAway={handleClickAway}>
        <ClickAwayContainer>
          <MenuContainer>
            {searching ? <SearchIcon />
              : (showIcon && chosenCommunityIcon ? <ChosenCommunityIcon src={chosenCommunityIcon} /> : <DashedCircle />)}
            <SubredditSearchField
              type="text"
              placeholder={searching ? 'Search communities' : 'Choose a community'}
              onClick={handleClickOnChoose}
              value={communityName}
              onChange={handleCommunityNameChange}
            />
            <DropIcon onClick={handleDrop} />
          </MenuContainer>
          {open
          && searching
          && (
          <SubredditsContainer>
            { profileMatching
            && (
            <>
              <CommunityCategory padding="16px 16px 4px">
                your profile
              </CommunityCategory>
              <CustomList>
                <ListItem
                  sx={{ cursor: 'pointer' }}
                  onClick={() => chooseCommunity(0, `u/${username}`, userIcon, 'User')}
                >
                  <AvatarContainer>
                    <Link to="/">
                      <CustomAvatar src={userIcon} alt="avatar" />
                    </Link>
                  </AvatarContainer>
                  <CommunityContainer>
                    <CommunityName>
                      u/
                      {username}
                    </CommunityName>
                  </CommunityContainer>
                </ListItem>
              </CustomList>
              {(profileMatching && filteredCommunities) && <Divider />}
            </>
            )}
            {!filteredCommunities && !profileMatching && (
            <NoCommunitiesFound>
              No communities found
            </NoCommunitiesFound>
            )}
            {(!profileMatching || filteredCommunities) && (
            <Box
              display="flex"
              justifyContent="space-between"
              padding="8px 8px 3px 16px"
              alignItems="center"
            >
              <CommunityCategory>
                your communities
              </CommunityCategory>
              <RedditButton
                padding="2px 8px"
                fontSize={12}
                fontWeight={700}
              >
                create new
              </RedditButton>
            </Box>
            )}

            <CustomList>
              {(filteredCommunities || (profileMatching ? [] : communities))?.map((community) => {
                const {
                  id, subredditName, membersCount, icon,
                } = community;
                return (
                  <ListItem
                    key={id}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => chooseCommunity(id, `r/${subredditName}`, icon, 'Subreddit')}
                  >
                    <CommunityAvatar src={icon} />
                    <CommunityContainer>
                      <CommunityName>
                        r/
                        {subredditName}
                      </CommunityName>
                      <Members>
                        {numberWithCommas(membersCount)}
                        {' '}
                        members
                      </Members>
                    </CommunityContainer>
                  </ListItem>
                );
              })}
            </CustomList>
            <Divider />
          </SubredditsContainer>
          )}
        </ClickAwayContainer>
      </ClickAwayListener>
    </MenuOuterContainer>
  );
}
export default SubredditsMenu;
