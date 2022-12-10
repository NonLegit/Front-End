/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { UnmuteContext } from '../../NonEmptyMuted/MutedUser/MutedUser';
import UnmuteHeader from '../UnmuteHeader/UnmuteHeader';
import UnmuteFooter from '../UnmuteFooter/UnmuteFooter';

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
        <UnmuteHeader handleClickCloseUnmute={handleClickCloseUnmute} />
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
        <UnmuteFooter handleClickCloseUnmute={handleClickCloseUnmute} />
      </Box>
    </StyledDialog>
  );
}

export default UnmutePopUp;
