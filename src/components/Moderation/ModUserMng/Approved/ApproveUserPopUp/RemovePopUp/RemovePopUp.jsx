/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog, FooterContainer } from '../../../styles';
import { RemoveContext } from '../../NonEmptyApproved/ApprovedUser/ApprovedUser';
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
import { ApprovedUnapprovedUser } from '../../ApprovedServer';

function RemovePopUp(props) {
  const { userName } = props;
  const { subReddit } = useParams();
  const {
    openRemove, handleClickCloseRemove,
  } = React.useContext(RemoveContext);
  const handleUnapprove = () => {
    ApprovedUnapprovedUser(userName, subReddit, 'disapprove');
  };
  return (
    <StyledDialog
      fullScreen
      open={openRemove}
      width="490px"
      height="190px"
    >
      <Box>
        <Header buttonFunction={handleClickCloseRemove} headerText="Confirm" />
        <Divider />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography sx={{ margin: '10px 0px' }}>
          Are you sure you want to remove
          {' '}
          {userName}
          {' '}
          as an approved user?
        </Typography>
      </Box>
      <FooterContainer>
        <Footer
          firstButtonFunction={handleClickCloseRemove}
          firstButtonText="Cancel"
          secondButtonFunction={handleUnapprove}
          secondButtonText="Remove"
        />
      </FooterContainer>
    </StyledDialog>
  );
}

export default RemovePopUp;
