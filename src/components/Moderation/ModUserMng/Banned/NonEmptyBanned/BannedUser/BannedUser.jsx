/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import {
  UserBar, UserContainer, UserMngButton, StyledAvatar, UsermngButtonContainer,
} from '../../../styles';

import MoreDetails from '../MoreDetails/MoreDetails';
import EditBanPopUp from '../../BanUserPopUp/EditBanPopUp/EditBanPopUp';

export const EditBanContext = React.createContext();

function BannedUser(props) {
  const {
    userName, profilePicture, banDate, punishType, note, punishReason, duration,
  } = props;
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
        <UserContainer>
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
        <Box sx={{ display: 'flex', width: '100%' }}>
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
        </Box>
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
