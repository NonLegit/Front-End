/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import {
  Box, Typography, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { StyledAvatar, UserBar, UserContainer } from '../../styles';
import RemovePopUp from '../RemovePopUp/RemovePopUp';
import EditPopUp from '../EditPopUp/EditPopUp';

export const RemoveContext = React.createContext();
export const EditContext = React.createContext();

/**
 * non empty moderator page
 * @component
 * @property {string} username the username of the moderator
 * @property {string} profilePicture it is the link to the profile picture of the moderator
 * @property {string} modDate it is the date to be a moderator
 * @property {boolean} all indicates that the moderator has all privileges
 * @property {boolean} access indicates that tha moderator has the control on user
 * @property {boolean} confing indicates that the moderator has the control on settings
 * @property {boolean} flair indicates that the moderator has the control on post flairs
 * @property {boolean} posts indicates that the moderator has the control on posts
 * @property {integer} type determine the type of moderators if invited or arleady a moderator
 * @return {React.Component} - non empty moderator page component
 */

function NonEmptyModerator(props) {
  // 0 stands for all moderators (marked as editable but handeled in database)
  // 1 stands for Invited moderators
  const {
    userName, profilePicture, modDate, all, access, config, flair, posts, type,
  } = props;

  const navigate = useNavigate();

  // navigate
  const handleClickUser = (userName) => {
    navigate(`/user/${userName}`);
  };

  const [openRemove, setOpenRemove] = React.useState(false);
  const handleClickOpenRemove = () => { setOpenRemove(true); };
  const handleClickCloseRemove = () => { setOpenRemove(false); };

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleClickOpenEdit = () => { setOpenEdit(true); };
  const handleClickCloseEdit = () => { setOpenEdit(false); };

  const handlePermissions = () => {
    const permissions = [];
    if (all === true) permissions.push('Everything');
    else {
      if (access === true) permissions.push('Manage Users, ');
      if (config === true) permissions.push('Manage Settings, ');
      if (flair === true) permissions.push('Manage Flair, ');
      if (posts === true) permissions.push('Manage Posts & Comments, ');
      const lastElemnt = permissions.pop().trimEnd();
      permissions.push(lastElemnt.substring(0, lastElemnt.length - 1));
    }
    return permissions;
  };

  return (
    <UserBar>
      <RemoveContext.Provider value={{
        openRemove, handleClickCloseRemove, userName,
      }}
      >
        <RemovePopUp />
      </RemoveContext.Provider>
      <EditContext.Provider value={{
        openEdit, handleClickCloseEdit,
      }}
      >
        <EditPopUp userName={userName} />
      </EditContext.Provider>
      <UserContainer onClick={() => handleClickUser(userName)}>
        <StyledAvatar src={profilePicture} variant="square" />
        <Typography
          padding="8px"
          fontSize="15px"
          fontWeight="bold"
        >
          {userName}
        </Typography>
      </UserContainer>
      <Box display="flex">
        <Typography
          padding="8px"
          fontSize="12px"
          color="#878A8C"
          width="max-content"
        >
          {modDate}
        </Typography>
      </Box>
      <Box sx={{
        alignItems: 'center', display: 'flex', padding: '8px 16px', width: '100%', justifyContent: 'flex-end',
      }}
      >
        {(() => {
          switch (type) {
            case '1': return (
              <>
                <Typography
                  padding="4px"
                  fontSize="12px"
                  color="#878A8C"
                >
                  {handlePermissions()}
                </Typography>
                <IconButton disableRipple disableTouchRipple onClick={handleClickOpenRemove}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </>
            );
            default: return (
              <>
                <Typography
                  padding="4px"
                  fontSize="12px"
                  color="#878A8C"
                >
                  {handlePermissions()}
                </Typography>
                <IconButton disableRipple disableTouchRipple onClick={handleClickOpenEdit}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </>
            );
          }
        })()}
      </Box>
    </UserBar>
  );
}
export default NonEmptyModerator;
