/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog, FooterContainer } from '../../../styles';
import { ApproveContext } from '../../ApproveUser';
import Username from '../../../Username/Username';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import { ApprovedUnapprovedUser } from '../../ApprovedServer';

function ApprovePopUp() {
  const { subReddit } = useParams();
  const {
    openApprove, handleClickCloseApprove,
  } = React.useContext(ApproveContext);

  const handleApprove = async () => {
    const username = document.getElementById('username').value;
    ApprovedUnapprovedUser(username, subReddit, 'approve');
  };

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
        <Footer
          firstButtonFunction={handleClickCloseApprove}
          firstButtonText="Cancel"
          secondButtonFunction={handleApprove}
          secondButtonText="Add user"
        />
      </FooterContainer>
    </StyledDialog>
  );
}

export default ApprovePopUp;
