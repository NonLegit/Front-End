/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog } from '../../../styles';
import EditBanHeader from '../EditBanHeader/EditBanHeader';
import BanReason from '../BanReason/BanReason';
import BanNote from '../BanNote/BanNote';
import BanPeriod from '../BanPeriod/BanPeriod';
import BanMessage from '../BanMessage/BanMessage';
import EditBanFooter from '../EditBanFooter/EditBanFooter';
import { EditBanContext } from '../../NonEmptyBanned/BannedUser/BannedUser';
import { banUnbanUser, Editban } from '../banServer';

/**
 * EditBan popup
 * @component
 * @property  {string} userName username of banned user
 * @property  {string} note the moderator note about the banned user
 * @property  {string} punishReason more details from the moderator about the banned user
 * @property  {enum} punishType enum explain why this user is banned ( spam of threatining ... etc)
 * @property  {unsigned int} duration the period that the user is banned it ranges from 0 to 999 or may be permenant
 * @return {React.Component} - EditBan popup
 */

function EditBanPopUp(props) {
  const {
    userName, note, punishReason, punishType, duration,
  } = props;
  const { subReddit } = useParams();
  const handleUnban = () => {
    banUnbanUser(userName, subReddit, 'unban', '', '', '', '');
  };

  const handleEditBan = () => {
    const reason = document.getElementById('reason').textContent;
    const banNote = document.getElementById('banNote').value;
    const banMessage = document.getElementById('banMessage').value;
    const duration = document.getElementById('duration').value;
    Editban(userName, subReddit, reason, banNote, banMessage, duration);
  };

  const {
    openEditBan, handleClickCloseEditBan,
  } = React.useContext(EditBanContext);
  return (
    <StyledDialog
      fullScreen
      open={openEditBan}
      width="538px"
      height="545px"
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
        <EditBanFooter handleClickCloseBan={handleClickCloseEditBan} handleUnban={handleUnban} handleEditBan={handleEditBan} />
      </Box>
    </StyledDialog>
  );
}

export default EditBanPopUp;
