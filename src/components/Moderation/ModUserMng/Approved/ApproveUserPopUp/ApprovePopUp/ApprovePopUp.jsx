/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import StyledDialog from './styles';
import { ApproveContext } from '../../ApproveUser';
import ApproveHeader from '../ApproveHeader/ApproveHeader';
import Username from '../Username/Username';
import ApproveFooter from '../ApproveFooter/ApproveFooter';

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
        <ApproveHeader handleClickCloseApproved={handleClickCloseApprove} />
        <Divider />
        <Username />
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <ApproveFooter handleClickCloseApproved={handleClickCloseApprove} />
      </Box>
    </StyledDialog>
  );
}

export default ApprovePopUp;
