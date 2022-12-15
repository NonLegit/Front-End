/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Avatar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import { UserBar, UserContainer, UserMngButton } from '../../../styles';

import MoreDetails from '../MoreDetails/MoreDetails';
import EditBanPopUp from '../../BanUserPopUp/EditBanPopUp/EditBanPopUp';

export const EditBanContext = React.createContext();

function BannedUser() {
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
          <EditBanPopUp />
        </EditBanContext.Provider>
        <UserContainer>
          <Avatar />
          <Box>
            <Typography
              padding="8px"
              fontSize="15px"
              fontWeight="bold"
            >
              username
            </Typography>
          </Box>
        </UserContainer>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            2 hours ago (Permanent)
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
            Spam
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', padding: '8px 16px', width: '30%' }}>
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
        </Box>
      </UserBar>
      <MoreDetails modNote="blabla" bannedFor="toooooot" isOpened={isOpened} />
    </>
  );
}
export default BannedUser;
