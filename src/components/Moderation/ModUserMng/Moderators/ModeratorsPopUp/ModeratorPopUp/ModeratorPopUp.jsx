/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import StyledDialog from './styles';
import { ApproveContext } from '../../Moderators';
import ModeratorHeader from '../ModeratorHeader/ModeratorHeader';
import Username from '../Username/Username';
import ModeratorFoooter from '../ModeratorFooter/ModeratorFooter';

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
        <ModeratorHeader handleClickCloseApproved={handleClickCloseApprove} />
        <Divider />
        <Username />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <ModeratorFoooter handleClickCloseApproved={handleClickCloseApprove} />
      </Box>
    </StyledDialog>
  );
}

export default ModeratorPopUp;
