/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { RemoveContext } from '../../NonEmptyApproved/ApprovedUser/ApprovedUser';
import RemoveHeader from '../RemoveHeader/RemoveHeader';
import RemoveFooter from '../RemoveFooter/RemoveFooter';

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
        <RemoveHeader handleClickCloseRemove={handleClickCloseRemove} />
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
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <RemoveFooter handleClickCloseRemove={handleClickCloseRemove} />
      </Box>
    </StyledDialog>
  );
}

export default RemovePopUp;
