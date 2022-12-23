/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import {
  UserBar, UserContainer, UserMngButton, StyledAvatar, UsermngButtonContainer, TextContainer,
} from '../../../styles';

import MoreDetails from '../MoreDetails/MoreDetails';
import EditBanPopUp from '../../BanUserPopUp/EditBanPopUp/EditBanPopUp';

export const EditBanContext = React.createContext();

/**
 * Banned user instace
 * @component
 * @property  {string} username username of banned user
 * @property  {string} profilePicture link to banned user profile picture
 * @property  {string} banDate the date that the user is banned at
 * @property {enum} punishType explain why this user is banned (spam or threatining etc...)
 * @property {string} note note from the moderator about the banned user
 * @property {string} punishReason extra details about the banned user
 * @property {string} duration the duration ban for the banned user it ranges from 0 to 999 and can be permenant
 * @return {React.Component} - Banned user instace component
 */

function BannedUser(props) {
  const {
    userName, profilePicture, banDate, punishType, note, punishReason, duration,
  } = props;

  const navigate = useNavigate();

  // navigate
  const handleClickUser = (userName) => {
    navigate(`/user/${userName}`);
  };

  const [openEditBan, setOpenEditBan] = React.useState(false);

  const handleClickOpenEditBan = () => { setOpenEditBan(true); };
  const handleClickCloseEditBan = () => { setOpenEditBan(false); };

  const [isOpened, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpened);
  };
  return (
    <>
      <UserBar>
        <EditBanContext.Provider value={{
          openEditBan, handleClickCloseEditBan,
        }}
        >
          <EditBanPopUp
            userName={userName}
            note={note}
            punishReason={punishReason}
            punishType={punishType}
            duration={duration}
          />
        </EditBanContext.Provider>
        <UserContainer onClick={() => handleClickUser(userName)}>
          <StyledAvatar src={profilePicture} variant="square" />
          <Box>
            <Typography
              padding="8px"
              fontSize="15px"
              fontWeight="bold"
            >
              {userName}
            </Typography>
          </Box>
        </UserContainer>
        <TextContainer>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            {banDate}
            {' '}
            (
            {(duration === -1) ? 'permenant' : `${duration} days left`}
            )
          </Typography>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            •
          </Typography>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            {punishType}
          </Typography>
        </TextContainer>
        <UsermngButtonContainer>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClickOpenEditBan}
          >
            Edit
          </UserMngButton>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClick}
            endIcon={(isOpened) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          >
            More Details
          </UserMngButton>
        </UsermngButtonContainer>
      </UserBar>
      <MoreDetails modNote={note} bannedFor={punishReason} isOpened={isOpened} />
    </>
  );
}
export default BannedUser;
