/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog, FooterContainer } from '../../styles';
import { InvitationContext } from '../Moderators';
import Header from '../../Header/Header';
import Username from '../../Username/Username';
import Foooter from '../../Footer/Footer';
import Permissions from '../Permissions/Persmissions';
import { inviteMod } from './invitationServer';

/**
 * invitation popup for moderator page
 * @component
 * @return {React.Component} - invite moderator popup component
 */

function InvitationPopUp() {
  const { subReddit } = useParams();

  const handleInvite = async () => {
    const userName = document.getElementById('username').value;
    const everything = document.getElementById('everything').checked;
    const manageUsers = document.getElementById('manage_users').checked;
    const manageSettings = document.getElementById('manage_settings').checked;
    const manageFlair = document.getElementById('manage_flair').checked;
    const managePost = document.getElementById('manage_post').checked;
    inviteMod(userName, subReddit, everything, manageUsers, manageSettings, manageFlair, managePost);
  };

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
        <Foooter
          firstButtonFunction={handleClickCloseInvitation}
          firstButtonText="Cancel"
          secondButtonFunction={handleInvite}
          secondButtonText="Invite"
        />
      </FooterContainer>
    </StyledDialog>
  );
}

export default InvitationPopUp;
