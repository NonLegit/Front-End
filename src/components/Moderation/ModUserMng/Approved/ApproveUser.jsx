/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from './styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import BanPopUp from './ApproveUserPopUp/ApprovePopUp/ApprovePopUp';
import { RedditButton } from '../../styles';
import NonEmptyApproved from './NonEmptyApproved/NonEmptyApproved';

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
        <BanPopUp />
      </ApproveContext.Provider>
      <ControlBar>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          onClick={handleClickOpenApprove}
        >
          Approve user
        </RedditButton>
      </ControlBar>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">Approved users</Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
      </QueueBox>
      <NonEmptyApproved />
    </ModMainPage>
  );
}

export default Aprrove;
