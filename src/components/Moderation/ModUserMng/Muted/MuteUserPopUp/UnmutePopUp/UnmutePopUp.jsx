/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { UnmuteContext } from '../../NonEmptyMuted/MutedUser/MutedUser';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

function UnmutePopUp(props) {
  const { userName } = props;
  const {
    openUnmute, handleClickCloseUnmute,
  } = React.useContext(UnmuteContext);
  return (
    <StyledDialog
      fullScreen
      open={openUnmute}
    >
      <Box>
        <Header buttonFunction={handleClickCloseUnmute} headerText="Confirm" />
        <Divider />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography fonstSize="14px" sx={{ margin: '10px 0px' }}>
          Are you sure you want to Unmute
          {' '}
          {userName}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Footer buttonFunction={handleClickCloseUnmute} firstButtonText="Cancel" secondButtonText="Remove" />
      </Box>
    </StyledDialog>
  );
}

export default UnmutePopUp;
