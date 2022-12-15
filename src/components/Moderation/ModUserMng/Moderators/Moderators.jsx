/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import * as React from 'react';
import {
  QueueBox, QueueText, ControlBar, InstanceContainer,
} from '../styles';
import { ModMainPage } from '../../ModerationMainPage/styles';
import LeavePopUp from './LeavePopUp/LeavePopUp';
import { RedditButton } from '../../styles';
// import NonEmptyModerator from './NonEmptyModerator/NonEmptyModerator';
import Invitation from './InvitationPopUp/InvitationPopUp';
import SearchBar from '../SearchBar/SearchBar';
import ModeratorsList from './NonEmptyModerator/ModeratorsList/ModeratorsList';

export const LeaveContext = React.createContext();
export const InvitationContext = React.createContext();

function Moderator(props) {
  const { subReddit } = props;

  const [openLeave, setOpenLeave] = React.useState(false);
  const handleClickOpenLeave = () => { setOpenLeave(true); };
  const handleClickCloseLeave = () => { setOpenLeave(false); };

  const [openInvitation, setOpenInvitation] = React.useState(false);
  const handleClickOpenInvitation = () => { setOpenInvitation(true); };
  const handleClickCloseInvitation = () => { setOpenInvitation(false); };

  return (
    <ModMainPage>
      <LeaveContext.Provider value={{
        openLeave, handleClickCloseLeave,
      }}
      >
        <LeavePopUp />
      </LeaveContext.Provider>
      <InvitationContext.Provider value={{
        openInvitation, handleClickCloseInvitation,
      }}
      >
        <Invitation />
      </InvitationContext.Provider>
      <ControlBar>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="outlined"
          sx={{ marginRight: '12px' }}
          onClick={handleClickOpenLeave}
        >
          Leave as mod
        </RedditButton>
        <RedditButton
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          onClick={handleClickOpenInvitation}
        >
          Invite user as mode
        </RedditButton>
      </ControlBar>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">
            Moderators of r/
            {subReddit}
          </Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
      </QueueBox>
      <SearchBar />
      <InstanceContainer>
        <ModeratorsList />
        {/* <NonEmptyModerator type="0" />
      </InstanceContainer>
      <InstanceContainer>
        <Typography
          color="#1C1C1C"
          padding="0px 0px 8px 24px"
          fontWeight={600}
          fontSize="14px"
        >
          You can edit these moderators
        </Typography>
        <NonEmptyModerator type="1" />
      </InstanceContainer>
      <InstanceContainer>
        <Typography
          color="#1C1C1C"
          padding="0px 0px 8px 24px"
          fontWeight={600}
          fontSize="14px"
        >
          Invited moderators
        </Typography>
        <NonEmptyModerator type="2" /> */}
      </InstanceContainer>
    </ModMainPage>
  );
}

export default Moderator;
