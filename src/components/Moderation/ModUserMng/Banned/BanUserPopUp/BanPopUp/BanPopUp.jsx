/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import StyledDialog from './styles';
import { BanContext } from '../../BanUser';
import BanHeader from '../BanHeader/BanHeader';
import Username from '../Username/Username';
import BanReason from '../BanReason/BanReason';
import BanNote from '../BanNote/BanNote';
import BanPeriod from '../BanPeriod/BanPeriod';
import BanMessage from '../BanMessage/BanMessage';
import BanFooter from '../BanFooter/BanFooter';

function BanPopUp() {
  const {
    openBan, handleClickCloseBan,
  } = React.useContext(BanContext);
  return (
    <StyledDialog
      fullScreen
      open={openBan}
    >
      <Box>
        <BanHeader handleClickCloseBan={handleClickCloseBan} />
        <Divider />
        <Username />
        <BanReason />
        <BanNote />
        <BanPeriod />
      </Box>
      <Box sx={{ backgroundColor: '#edeff1 ', height: '100%' }}>
        <BanMessage />
        <BanFooter handleClickCloseBan={handleClickCloseBan} />
      </Box>
    </StyledDialog>
  );
}

export default BanPopUp;
