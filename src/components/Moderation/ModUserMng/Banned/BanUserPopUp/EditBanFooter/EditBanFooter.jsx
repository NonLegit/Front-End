import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';
import { UserMngButton } from '../../../styles';

/**
 * EditBan popup footer
 * @component
 * @property  {function} handleClickCloseBan close the popup
 * @property  {function} handleUnban unban user and send data to the backend
 * @property  {function} handleEditBan edit banned user data from the duration of be panned to the reason and the ban message etc
 * @return {React.Component} - EditBan popup foooter
 */

function EditBanFooter(props) {
  const { handleClickCloseBan, handleUnban, handleEditBan } = props;
  return (
    <StyledBox>
      <UserMngButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        disableRipple
        disableFocusRipple
        sx={{ color: 'red' }}
        onClick={handleUnban}
        startIcon={<CheckCircleIcon sx={{ color: 'Red' }} />}
      >
        Unban
      </UserMngButton>
      <Box>
        <RedditButton
          fontSize="15px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="outlined"
          onClick={handleClickCloseBan}
          disableRipple
          disableFocusRipple
        >
          Cancel
        </RedditButton>
        <RedditButton
          sx={{ marginLeft: 1 }}
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          disableRipple
          disableFocusRipple
          onClick={handleEditBan}
        >
          Edit
        </RedditButton>
      </Box>
    </StyledBox>
  );
}

export default EditBanFooter;
