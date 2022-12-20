import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';
import { UserMngButton } from '../../../styles';

function EditFooter(props) {
  const { handleClickCloseEdit, handleRemove, handleEdit } = props;
  return (
    <StyledBox>
      <UserMngButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        disableRipple
        disableFocusRipple
        sx={{ color: 'red' }}
        onClick={handleRemove}
        startIcon={<CheckCircleIcon sx={{ color: 'Red' }} />}
      >
        remove
      </UserMngButton>
      <Box>
        <RedditButton
          fontSize="15px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="outlined"
          onClick={handleClickCloseEdit}
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
          onClick={handleEdit}
        >
          Edit
        </RedditButton>
      </Box>
    </StyledBox>
  );
}

export default EditFooter;
