import {
  DialogActions, DialogContent, DialogTitle, RadioGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {
  ApplyFlairButton,
  CloseButton, CustomDialog, Flair, FlairFormControlLabel, FlairRadio, FlairsContainer, SelectedFlair, Title,
} from './styles';
import RedditButton from '../../../../../RedditButton/RedditButton';

function Flairs(props) {
  // props
  const {
    open, handleOpenFlairs, setFlair, flairs,
  } = props;

  // refs
  const [currentFlair, setCurrentFlair] = useState(null);

  // handlers
  const handleChangeFlair = (event) => {
    setCurrentFlair(event.target.value);
  };
  const handleClearFlairs = () => {
    setFlair(null);
  };
  const handleApplyFlair = () => {
    setFlair(currentFlair);
    handleOpenFlairs(false);
  };
  return (
    <CustomDialog open={open}>
      <DialogTitle>
        <Title>
          Select r/Egypt flair
        </Title>
        <CloseButton
          disableRipple
          color="third"
          onClick={() => {
            handleOpenFlairs(false);
            console.log('hiiiiii');
          }}
        >
          <CloseIcon />
        </CloseButton>

      </DialogTitle>
      <DialogContent dividers>
        <SelectedFlair>
          No flair selected
        </SelectedFlair>
        <FlairsContainer>
          {flairs && (
          <RadioGroup
            onChange={handleChangeFlair}
          >
            {flairs.map((flair) => {
              const {
                _id: id, text, backgroundColor, textColor,
              } = flair;
              // console.log(backgroundColor, textColor);
              // console.log(flairsRef?.current?.value);
              return (
                <FlairFormControlLabel
                  value={id}
                  selected={currentFlair === id}
                  control={(
                    <FlairRadio
                      disableRipple
                      size="small"
                    />
)}
                  label={(
                    <Flair
                      backgroundColor={backgroundColor}
                      color={textColor}
                    >
                      {text}
                    </Flair>
)}
                  key={id}
                />
              );
            })}
          </RadioGroup>
          )}
        </FlairsContainer>
      </DialogContent>
      <DialogActions>
        <RedditButton
          variant="outlined"
          padding="3px 16px"
          fontSize={14}
          fontWeight="bold"
          type="submit"
          onClick={handleClearFlairs}
        >
          clear
        </RedditButton>
        <ApplyFlairButton
          variant="contained"
          type="submit"
          onClick={handleApplyFlair}
          disabled={!currentFlair}
          data-testid="post button"
        >
          apply
        </ApplyFlairButton>
      </DialogActions>
    </CustomDialog>
  );
}

export default Flairs;
