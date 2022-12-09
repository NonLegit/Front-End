import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, IconButton, Radio, RadioGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Flairs(props) {
  // props
  const {
    open, handleOpenFlairs, setFlair, flairs,
  } = props;

  // handlers
  const handleChangeFlair = (event) => {
    setFlair(event.target.value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>
        Subscribe
        <IconButton
          color="primary"
          onClick={() => {
            handleOpenFlairs(false);
            console.log('hiiiiii');
          }}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>
      <DialogContent>
        {flairs && (
        <RadioGroup
          onChange={handleChangeFlair}
        >
          {flairs.map((flair) => {
            const {
              _id: id, text, backgroundColor, textColor,
            } = flair;
            console.log(backgroundColor, textColor);
            return (
              <FormControlLabel
                value={id}
                control={<Radio />}
                label={text}
                key={id}
              />
            );
          })}
        </RadioGroup>
        )}
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Flairs;
