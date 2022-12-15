/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Avatar, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import { UserBar } from './styles';
import { UserMngButton } from '../../../styles';
import MoreDetails from '../MoreDetails/MoreDetails';
import UnmutePopUp from '../../MuteUserPopUp/UnmutePopUp/UnmutePopUp';

export const UnmuteContext = React.createContext();

function BannedUser() {
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
          <UnmutePopUp />
        </UnmuteContext.Provider>
        <Box sx={{
          display: 'flex', alignItems: 'center', padding: '8px 16px', minWidth: '220px',
        }}
        >
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
        </Box>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            2 hours ago
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', padding: '8px 16px', width: '30%' }}>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClickOpenUnmute}
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
      <MoreDetails modNote="blabla" isOpened={isOpened} />
    </>
  );
}
export default BannedUser;
