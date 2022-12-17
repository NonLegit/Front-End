/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { LeaveContext } from '../Moderators';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function LeavePopUp() {
  const {
    openLeave, handleClickCloseLeave,
  } = React.useContext(LeaveContext);
  return (
    <StyledDialog
      fullScreen
      open={openLeave}
    >
      <Box>
        <Header buttonFunction={handleClickCloseLeave} headerText="Leave as mod" />
        <Divider />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography fontSize="14px">
          Once you leave as a mod, you will lose mod permissions and will be unable
          to access any mod tools for this community. Are you sure you wish to leave
          as a mod of this community?
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Footer buttonFunction={handleClickCloseLeave} firstButtonText="Cancel" secondButtonText="Leave" />
      </Box>
    </StyledDialog>
  );
}

export default LeavePopUp;
