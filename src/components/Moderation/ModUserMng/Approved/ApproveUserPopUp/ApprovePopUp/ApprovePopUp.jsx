/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import StyledDialog from './styles';
import { ApproveContext } from '../../ApproveUser';
import Username from '../../../Username/Username';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';

function ApprovePopUp() {
  const {
    openApprove, handleClickCloseApprove,
  } = React.useContext(ApproveContext);
  return (
    <StyledDialog
      fullScreen
      open={openApprove}
    >
      <Box>
        <Header buttonFunction={handleClickCloseApprove} headerText="Add approved user" />
        <Divider />
        <Username placeholder="Enter username" />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Footer buttonFunction={handleClickCloseApprove} firstButtonText="Cancel" secondButtonText="Add user" />
      </Box>
    </StyledDialog>
  );
}

export default ApprovePopUp;
