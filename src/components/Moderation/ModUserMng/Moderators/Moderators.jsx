/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from './styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import ModeratorPopUp from './ModeratorsPopUp/ModeratorPopUp/ModeratorPopUp';
import { RedditButton } from '../../styles';
import NonEmptyModerator from './NonEmptyModerator/NonEmptyModerator';

export const ApproveContext = React.createContext();

function Aprrove() {
  const [openApprove, setOpenApprove] = React.useState(false);

  const handleClickOpenApprove = () => { setOpenApprove(true); };
  const handleClickCloseApprove = () => { setOpenApprove(false); };
  return (
    <ModMainPage>
      <ApproveContext.Provider value={{
        openApprove, handleClickCloseApprove,
      }}
      >
        <ModeratorPopUp />
      </ApproveContext.Provider>
      <ControlBar>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="outlined"
          sx={{ marginRight: '12px' }}
          onClick={handleClickOpenApprove}
        >
          Leave as mod
        </RedditButton>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          onClick={handleClickOpenApprove}
        >
          Invite user as mode
        </RedditButton>
      </ControlBar>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">Approved users</Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
      </QueueBox>
      <NonEmptyModerator />
    </ModMainPage>
  );
}

export default Aprrove;
