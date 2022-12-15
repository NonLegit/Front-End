/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { RemoveContext } from '../NonEmptyModerator/Moderator/Moderator';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function RemovePopUp(props) {
  const { userName } = props;
  const {
    openRemove, handleClickCloseRemove,
  } = React.useContext(RemoveContext);
  return (
    <StyledDialog
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
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <Footer buttonFunction={handleClickCloseRemove} firstButtonText="Cancel" secondButtonText="Remove" />
      </Box>
    </StyledDialog>
  );
}

export default RemovePopUp;
