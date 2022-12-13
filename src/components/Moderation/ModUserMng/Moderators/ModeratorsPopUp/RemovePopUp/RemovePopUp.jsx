/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import StyledDialog from './styles';
import { RemoveContext } from '../../NonEmptyModerator/Moderator/Moderator';
import RemoveHeader from '../RemoveHeader/RemoveHeader';
import RemoveFooter from '../RemoveFooter/RemoveFooter';

function RemovePopUp() {
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
        <Typography fontSize="14px">
          Once you leave as a mod, you will lose mod permissions and will be unable
          to access any mod tools for this community. Are you sure you wish to leave
          as a mod of this community?
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', backgroundColor: '#edeff1 ', height: '100%' }}>
        <RemoveFooter handleClickCloseRemove={handleClickCloseRemove} />
      </Box>
    </StyledDialog>
  );
}

export default RemovePopUp;
