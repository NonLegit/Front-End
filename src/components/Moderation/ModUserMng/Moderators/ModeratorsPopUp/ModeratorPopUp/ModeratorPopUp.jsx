/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import StyledDialog from './styles';
import { ApproveContext } from '../../Moderators';
import Header from '../../../Header/Header';
import Username from '../../../Username/Username';
import Foooter from '../../../Footer/Footer';

function ModeratorPopUp() {
  const {
    openApprove, handleClickCloseApprove,
  } = React.useContext(ApproveContext);
  return (
    <StyledDialog
      fullScreen
      open={openApprove}
    >
      <Box>
        <Header buttonFunction={handleClickCloseApprove} headerText="Invite moderators" />
        <Divider />
        <Username placeholder="Enter username" />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Foooter buttonFunction={handleClickCloseApprove} firstButtonText="Cancel" secondButtonText="Invite" />
      </Box>
    </StyledDialog>
  );
}

export default ModeratorPopUp;
