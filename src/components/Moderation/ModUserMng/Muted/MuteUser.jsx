/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from '../styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import MutePopUp from './MuteUserPopUp/MutePopUp/MutePopUp';
import { RedditButton } from '../../styles';
import MutedUserList from './NonEmptyMuted/MutedUserList/MutedUserList';

export const MuteContext = React.createContext();

function Mute() {
  const [openMute, setOpenMute] = React.useState(false);

  const handleClickOpenMute = () => { setOpenMute(true); };
  const handleClickCloseMute = () => { setOpenMute(false); };
  return (
    <ModMainPage>
      <MuteContext.Provider value={{
        openMute, handleClickCloseMute,
      }}
      >
        <MutePopUp />
      </MuteContext.Provider>
      <ControlBar>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          onClick={handleClickOpenMute}
        >
          Mute user
        </RedditButton>
      </ControlBar>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">Muted users</Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
      </QueueBox>
      <MutedUserList />
    </ModMainPage>
  );
}

export default Mute;
