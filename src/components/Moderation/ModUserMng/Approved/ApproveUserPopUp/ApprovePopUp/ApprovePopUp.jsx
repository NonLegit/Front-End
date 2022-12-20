/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { StyledDialog, FooterContainer } from '../../../styles';
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
      height="185px"
      width="410px"
      open={openApprove}
    >
      <Box>
        <Header buttonFunction={handleClickCloseApprove} headerText="Add approved user" />
        <Divider />
        <Username placeholder="Enter username" />
      </Box>
      <FooterContainer>
        <Footer firstButtonFunction={handleClickCloseApprove} firstButtonText="Cancel" secondButtonText="Add user" />
      </FooterContainer>
    </StyledDialog>
  );
}

export default ApprovePopUp;
