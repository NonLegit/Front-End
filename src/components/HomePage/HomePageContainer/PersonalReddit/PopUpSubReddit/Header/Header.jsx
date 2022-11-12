import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  BOX, DialogTitle, Disc, Name, SecConatiner, StyledTooltip,
} from './style';
/**
 *@component
 * @param {object} props
 * @return {React.Component} -Header for pop up form
 */
function Header(props) {
  const { handleClose } = props;
  return (
    <>
      {' '}
      <BOX>
        <DialogTitle>Create a community</DialogTitle>
        <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
      </BOX>
      <SecConatiner>
        <Name>Name</Name>
        <Disc sx={{ height: 'fit-content', alignItems: 'center' }}>
          Community names including capitalization cannot be changed.
          <StyledTooltip
            title='Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").'
          >
            <IconButton>
              <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', fontSize: 'small', color: 'gray' }} />
            </IconButton>
          </StyledTooltip>
        </Disc>
      </SecConatiner>
    </>

  );
}
export default Header;
