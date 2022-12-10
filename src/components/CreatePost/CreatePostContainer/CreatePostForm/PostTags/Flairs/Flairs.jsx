import {
  Box,
  DialogContent, DialogTitle, RadioGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {
  ApplyFlairButton,
  CloseButton, CustomDialog, Flair, FlairDialogActions, FlairFormControlLabel, FlairRadio, FlairsContainer, SelectedFlair, Title,
} from './styles';
import RedditButton from '../../../../../RedditButton/RedditButton';

function Flairs(props) {
  // props
  const {
    open, handleOpenFlairs, setFlair, flairs, flair, communityName,
  } = props;

  console.log(flair);
  // states
  const [currentFlair, setCurrentFlair] = useState(null);

  // handlers
  const handleChangeFlair = (event) => {
    setCurrentFlair(event.target.value);
    console.log(event.target.value);
  };
  const handleClearFlairs = () => {
    setFlair(null);
    setCurrentFlair(null);
  };
  const handleApplyFlair = () => {
    setFlair(JSON.parse(currentFlair));
    handleOpenFlairs(false);
  };

  // variables
  const { text: currentFlairText, textColor: currentFlairColor, backgroundColor: currentFlairBackgroundColor } = JSON.parse(currentFlair || '{}');
  return (
    <CustomDialog open={open}>
      <DialogTitle>
        <Title>
          Select
          {' '}
          {communityName}
          {' '}
          flair
        </Title>
        <CloseButton
          disableRipple
          color="third"
          onClick={() => {
            handleOpenFlairs(false);
            setCurrentFlair(null);
          }}
        >
          <CloseIcon />
        </CloseButton>

      </DialogTitle>
      <DialogContent dividers>
        <SelectedFlair>
          {currentFlair ? (
            <Box
              display="flex"
              alignItems="center"
              gap={0.25}
              height={16}
            >
              Post Title
              <Flair
                backgroundColor={currentFlairBackgroundColor}
                color={currentFlairColor}
              >
                {currentFlairText}
              </Flair>
            </Box>
          )
            : 'No flair selected'}
        </SelectedFlair>
        <FlairsContainer>
          {flairs && (
          <RadioGroup
            onChange={handleChangeFlair}
            value={currentFlair}
          >
            {flairs.map((flair) => {
              const {
                _id: id, text, backgroundColor, textColor,
              } = flair;
              // console.log(backgroundColor, textColor);
              // console.log(flairsRef?.current?.value);
              return (
                <FlairFormControlLabel
                  value={JSON.stringify({
                    id, text, textColor, backgroundColor,
                  })}
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
      <FlairDialogActions>
        <RedditButton
          variant="outlined"
          padding="2px 16px"
          fontSize={14}
          fontWeight="bold"
          type="submit"
          color="third"
          onClick={handleClearFlairs}
        >
          clear flair
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
      </FlairDialogActions>
    </CustomDialog>
  );
}

export default Flairs;
