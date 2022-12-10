/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { MuteContext } from '../../MuteUser';
import MuteHeader from '../MuteHeader/MuteHeader';
import Username from '../Username/Username';
import MuteMessage from '../MuteMessage/MuteMessage';
import MuteFooter from '../MuteFooter/MuteFooter';

function MutePopUp() {
  const {
    openMute, handleClickCloseMute,
  } = React.useContext(MuteContext);
  return (
    <StyledDialog
      fullScreen
      open={openMute}
    >
      <Box>
        <MuteHeader handleClickCloseMute={handleClickCloseMute} />
        <Divider />
        <Username />
        <Typography fontSize="14px" fontWeight={400} color="#1C1C1C" paddingLeft="16px">Note about why they are muted</Typography>
        <Typography fontSize="12px" fontWeight={400} color="#878A8C" paddingLeft="16px">Only visible to other moderators. Not visible to user</Typography>
      </Box>
      <MuteMessage />
      <Box sx={{
        display: 'flex', backgroundColor: '#edeff1 ', height: '100%',
      }}
      >
        <MuteFooter handleClickCloseMute={handleClickCloseMute} />
      </Box>
    </StyledDialog>
  );
}

export default MutePopUp;
