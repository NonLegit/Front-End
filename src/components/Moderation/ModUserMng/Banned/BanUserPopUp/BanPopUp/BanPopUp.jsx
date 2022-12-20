/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog } from '../../../styles';
import { BanContext } from '../../BanUser';
import Header from '../../../Header/Header';
import Username from '../../../Username/Username';
import BanReason from '../BanReason/BanReason';
import BanNote from '../BanNote/BanNote';
import BanPeriod from '../BanPeriod/BanPeriod';
import BanMessage from '../BanMessage/BanMessage';
import BanFooter from '../BanFooter/BanFooter';
import { banUnbanUser } from '../banServer';

function BanPopUp() {
  const { subReddit } = useParams();
  const {
    openBan, handleClickCloseBan,
  } = React.useContext(BanContext);

  const handleBan = async () => {
    const userName = document.getElementById('username').value;
    const reason = document.getElementById('reason').textContent;
    const banNote = document.getElementById('banNote').value;
    const banMessage = document.getElementById('banMessage').value;
    const duration = document.getElementById('duration').value;
    banUnbanUser(userName, subReddit, 'ban', reason, banNote, banMessage, duration);
  };
  return (
    <StyledDialog
      fullScreen
      open={openBan}
      width="538px"
      height="625px"
    >
      <Box>
        <Header buttonFunction={handleClickCloseBan} headerText="Ban a user:" />
        <Divider />
        <Username placeholder="u/username" />
        <BanReason punishType="Spam" />
        <BanNote note="" />
        <BanPeriod duration={-1} />
      </Box>
      <Box sx={{ backgroundColor: '#edeff1 ', height: '100%' }}>
        <BanMessage />
        <BanFooter handleClickCloseBan={handleClickCloseBan} handleBan={handleBan} />
      </Box>

    </StyledDialog>
  );
}

export default BanPopUp;
