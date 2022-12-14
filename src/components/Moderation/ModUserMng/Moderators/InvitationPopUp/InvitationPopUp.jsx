/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { InvitationContext } from '../Moderators';
import Header from '../../Header/Header';
import Username from '../../Username/Username';
import Foooter from '../../Footer/Footer';
import Permissions from './Permissions/Persmissions';

function InvitationPopUp() {
  const {
    openInvitation, handleClickCloseInvitation,
  } = React.useContext(InvitationContext);
  return (
    <StyledDialog
      fullScreen
      open={openInvitation}
    >
      <Box>
        <Header buttonFunction={handleClickCloseInvitation} headerText="Invite moderators" />
        <Divider />
        <Username placeholder="Enter username" />
        <Typography
          color="#1C1C1C"
          fontSize="16px"
          fontWeight={600}
          paddingLeft="16px"
        >
          Give them access to...
        </Typography>
      </Box>
      <Permissions />
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Foooter buttonFunction={handleClickCloseInvitation} firstButtonText="Cancel" secondButtonText="Invite" />
      </Box>
    </StyledDialog>
  );
}

export default InvitationPopUp;
