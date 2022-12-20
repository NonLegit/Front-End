/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { StyledDialog, FooterContainer } from '../../../styles';
import { UnmuteContext } from '../../NonEmptyMuted/MutedUser/MutedUser';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import { MuteUnmuteUser } from '../MuteServer';

function UnmutePopUp(props) {
  const { subReddit } = useParams();
  const { userName } = props;
  const handleUnmute = () => {
    MuteUnmuteUser(userName, '', subReddit, 'unmute');
  };

  const {
    openUnmute, handleClickCloseUnmute,
  } = React.useContext(UnmuteContext);
  return (
    <StyledDialog
      fullScreen
      open={openUnmute}
      width="410px"
      height="190px"
    >
      <Box>
        <Header buttonFunction={handleClickCloseUnmute} headerText="Confirm" />
        <Divider />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography fonstSize="14px" sx={{ margin: '10px 0px' }}>
          Are you sure you want to unmute
          {' '}
          {userName}
          ?
        </Typography>
      </Box>
      <FooterContainer>
        <Footer firstButtonFunction={handleClickCloseUnmute} firstButtonText="Cancel" secondButtonFunction={handleUnmute} secondButtonText="Unmute" />
      </FooterContainer>
    </StyledDialog>
  );
}

export default UnmutePopUp;
