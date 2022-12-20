/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { StyledDialog, FooterContainer } from '../../styles';
import { InvitationContext } from '../Moderators';
import Header from '../../Header/Header';
import Username from '../../Username/Username';
import Foooter from '../../Footer/Footer';
import Permissions from '../Permissions/Persmissions';

function InvitationPopUp() {
  const {
    openInvitation, handleClickCloseInvitation,
  } = React.useContext(InvitationContext);
  return (
    <StyledDialog
      width="538px"
      height="520px"
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
      <FooterContainer>
        <Foooter buttonFunction={handleClickCloseInvitation} firstButtonText="Cancel" secondButtonText="Invite" />
      </FooterContainer>
    </StyledDialog>
  );
}

export default InvitationPopUp;
