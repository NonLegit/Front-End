/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
import { StyledDialog, FooterContainer } from '../../styles';
import { RemoveContext } from '../NonEmptyModerator/NonEmptyModerator';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
// import { delMod } from './Delserver';

/**
 * remove the invitation of the moderator
 * @component
 * @return {React.Component} - remove the invitation of the moderator component
 */

function RemovePopUp() {
  // const { subReddit } = useParams();
  const {
    openRemove, handleClickCloseRemove, userName,
  } = React.useContext(RemoveContext);
  // const handleDelMod = () => {
  //   delMod(userName, subReddit);
  // };
  return (
    <StyledDialog
      width="fit-content"
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
