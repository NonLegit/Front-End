/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Avatar, Typography } from '@mui/material';
import * as React from 'react';
import { UserBar } from './styles';
import { UserMngButton } from '../../../styles';
import RemovePopUp from '../../ApproveUserPopUp/RemovePopUp/RemovePopUp';

export const RemoveContext = React.createContext();

function ApprovedUser() {
  const [openRemove, setOpenRemove] = React.useState(false);

  const handleClickOpenRemove = () => { setOpenRemove(true); };
  const handleClickCloseRemove = () => { setOpenRemove(false); };

  return (
    <UserBar>
      <RemoveContext.Provider value={{
        openRemove, handleClickCloseRemove,
      }}
      >
        <RemovePopUp />
      </RemoveContext.Provider>
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
        >
          Send message
        </UserMngButton>
        <UserMngButton
          disableRipple
          disableFocusRipple
          onClick={handleClickOpenRemove}
        >
          Remove
        </UserMngButton>
      </Box>
    </UserBar>
  );
}
export default ApprovedUser;
