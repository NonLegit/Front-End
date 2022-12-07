/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from './styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import BanPopUp from './BanUserPopUp/BanUserPopUp';
import { RedditButton } from '../../styles';
import NonEmptyBanned from './NonEmptyBanned/NonEmptyBanned';

export const BanContext = React.createContext();

function UserMng() {
  const [openBan, setOpenBan] = React.useState(false);

  const handleClockOpenBan = () => { setOpenBan(true); };
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
          onClick={handleClockOpenBan}
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
      <NonEmptyBanned />
    </ModMainPage>
  );
}

export default UserMng;
