/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from '../styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import BanPopUp from './BanUserPopUp/BanPopUp/BanPopUp';
import { RedditButton } from '../../styles';
import BannedUserList from './NonEmptyBanned/BannedUserList/BannedUserList';

export const BanContext = React.createContext();

/**
 * the whole page of banned
 * @component
 * @return {React.Component} - banned user page
 */

function Ban() {
  const [openBan, setOpenBan] = React.useState(false);

  const handleClickOpenBan = () => { setOpenBan(true); };
  const handleClickCloseBan = () => { setOpenBan(false); };
  return (
    <ModMainPage>
      <BanContext.Provider value={{
        openBan, handleClickCloseBan,
      }}
      >
        <BanPopUp />
      </BanContext.Provider>
      <ControlBar>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          onClick={handleClickOpenBan}
        >
          Ban user
        </RedditButton>
      </ControlBar>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">Banned users</Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
      </QueueBox>
      <BannedUserList />
    </ModMainPage>
  );
}

export default Ban;
