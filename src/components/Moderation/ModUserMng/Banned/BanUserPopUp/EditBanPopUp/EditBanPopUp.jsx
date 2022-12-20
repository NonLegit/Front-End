/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { StyledDialog } from '../../../styles';
import EditBanHeader from '../EditBanHeader/EditBanHeader';
import BanReason from '../BanReason/BanReason';
import BanNote from '../BanNote/BanNote';
import BanPeriod from '../BanPeriod/BanPeriod';
import BanMessage from '../BanMessage/BanMessage';
import EditBanFooter from '../EditBanFooter/EditBanFooter';
import { EditBanContext } from '../../NonEmptyBanned/BannedUser/BannedUser';

function EditBanPopUp(props) {
  const {
    userName, note, punishReason, punishType, duration,
  } = props;
  const {
    openEditBan, handleClickCloseEditBan,
  } = React.useContext(EditBanContext);
  return (
    <StyledDialog
      fullScreen
      open={openEditBan}
      width="538px"
      height="525px"
    >
      <Box>
        <EditBanHeader handleClickCloseBan={handleClickCloseEditBan} userName={userName} />
        <Divider />
        <BanReason punishType={punishType} />
        <BanNote note={note} />
        <BanPeriod duration={duration} />
      </Box>
      <Box sx={{ backgroundColor: '#edeff1 ', height: '100%' }}>
        <BanMessage punishReason={punishReason} />
        <EditBanFooter handleClickCloseBan={handleClickCloseEditBan} />
      </Box>
    </StyledDialog>
  );
}

export default EditBanPopUp;
