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
import UnmutePopUp from '../../MuteUserPopUp/UnmutePopUp/UnmutePopUp';

export const UnmuteContext = React.createContext();

function BannedUser(props) {
  const {
    userName, profilePicture, joiningDate, modNote,
  } = props;

  const [openUnmute, setOpenUnmute] = React.useState(false);

  const handleClickOpenUnmute = () => { setOpenUnmute(true); };
  const handleClickCloseUnmute = () => { setOpenUnmute(false); };

  const [isOpened, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpened);
  };
  return (
    <>
      <UserBar>
        <UnmuteContext.Provider value={{
          openUnmute, handleClickCloseUnmute,
        }}
        >
          <UnmutePopUp userName={userName} />
        </UnmuteContext.Provider>
        <UserContainer>
          <StyledAvatar src={profilePicture} variant="square" sx={{ width: '32px', height: '32px' }} />
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
            {joiningDate}
          </Typography>
        </Box>
        <UsermngButtonContainer>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClickOpenUnmute}
          >
            Unmute
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
      <MoreDetails modNote={modNote} isOpened={isOpened} />
    </>
  );
}
export default BannedUser;
