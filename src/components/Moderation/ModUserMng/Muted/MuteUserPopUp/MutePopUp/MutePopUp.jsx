/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { StyledDialog, FooterContainer } from '../../../styles';
import { MuteContext } from '../../MuteUser';
import Username from '../../../Username/Username';
import MuteMessage from '../MuteMessage/MuteMessage';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

function MutePopUp() {
  const {
    openMute, handleClickCloseMute,
  } = React.useContext(MuteContext);
  return (
    <StyledDialog
      fullScreen
      open={openMute}
      width="410px"
      height="355px"
    >
      <Box>
        <Header buttonFunction={handleClickCloseMute} headerText="Mute user" />
        <Divider />
        <Username placeholder="Username to mute" />
        <Typography fontSize="14px" fontWeight={400} color="#1C1C1C" paddingLeft="16px">Note about why they are muted</Typography>
        <Typography fontSize="12px" fontWeight={400} color="#878A8C" paddingLeft="16px">Only visible to other moderators. Not visible to user</Typography>
      </Box>
      <MuteMessage />
      <FooterContainer>
        <Footer buttonFunction={handleClickCloseMute} firstButtonText="Cancel" secondButtonText="Mute user" />
      </FooterContainer>
    </StyledDialog>
  );
}

export default MutePopUp;
