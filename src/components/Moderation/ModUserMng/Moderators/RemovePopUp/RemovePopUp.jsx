/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { StyledDialog, FooterContainer } from '../../styles';
import { RemoveContext } from '../NonEmptyModerator/Moderator';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function RemovePopUp(props) {
  const { userName } = props;
  const {
    openRemove, handleClickCloseRemove,
  } = React.useContext(RemoveContext);
  return (
    <StyledDialog
      width="490px"
      height="190px"
      fullScreen
      open={openRemove}
    >
      <Box>
        <Header buttonFunction={handleClickCloseRemove} headerText="Confirm" />
        <Divider />
      </Box>
      <Box sx={{ padding: '16px' }}>
        <Typography sx={{ margin: '10px 0px' }}>
          Are you sure you want to rescind the moderator invite to
          {' '}
          {userName}
          {' '}
          ?
        </Typography>
      </Box>
      <FooterContainer>
        <Footer buttonFunction={handleClickCloseRemove} firstButtonText="Cancel" secondButtonText="Remove" />
      </FooterContainer>
    </StyledDialog>
  );
}

export default RemovePopUp;
