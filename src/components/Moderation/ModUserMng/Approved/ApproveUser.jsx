/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar,
} from '../styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import ApprovePopUp from './ApproveUserPopUp/ApprovePopUp/ApprovePopUp';
import { RedditButton } from '../../styles';
import ApprovedUserList from './NonEmptyApproved/ApprovedUserList/ApprovedUserList';

export const ApproveContext = React.createContext();

/**
 * the whole page of approved
 * @component
 * @return {React.Component} - approved user page
 */

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
        <ApprovePopUp />
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
      <ApprovedUserList />
    </ModMainPage>
  );
}

export default Aprrove;
