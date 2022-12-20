/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledDialog, FooterContainer } from '../../styles';
import { EditContext } from '../NonEmptyModerator/NonEmptyModerator';
import Header from '../../Header/Header';
import Foooter from '../../Footer/Footer';
import Permissions from '../Permissions/Persmissions';
import { editMod } from './editServer';

function EditPopUp(props) {
  const { userName } = props;
  const { subReddit } = useParams();

  const handleEdit = async () => {
    const everything = document.getElementById('everything').checked;
    const manageUsers = document.getElementById('manage_users').checked;
    const manageSettings = document.getElementById('manage_settings').checked;
    const manageFlair = document.getElementById('manage_flair').checked;
    const managePost = document.getElementById('manage_post').checked;
    editMod(userName, subReddit, everything, manageUsers, manageSettings, manageFlair, managePost);
  };

  const {
    openEdit, handleClickCloseEdit,
  } = React.useContext(EditContext);
  return (
    <StyledDialog
      width="538px"
      height="450px"
      fullScreen
      open={openEdit}
    >
      <Box>
        <Header buttonFunction={handleClickCloseEdit} headerText={`Edit u/${userName}`} />
        <Divider />
        <Typography
          color="#1C1C1C"
          fontSize="16px"
          fontWeight={600}
          margin="5px 16px"
        >
          Access
        </Typography>
      </Box>
      <Permissions />
      <FooterContainer>
        <Foooter
          firstButtonFunction={handleClickCloseEdit}
          firstButtonText="Cancel"
          secondButtonFunction={handleEdit}
          secondButtonText="Save"
        />
      </FooterContainer>
    </StyledDialog>
  );
}

export default EditPopUp;
