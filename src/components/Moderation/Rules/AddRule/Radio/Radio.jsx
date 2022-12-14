import {
  DialogContentText,
  FormControl, FormControlLabel, Radio, RadioGroup,
} from '@mui/material';
import {
  Cont, ContUp, Lable, Name,
} from './style';
/**
   *@component
   * @param {object} props
   * @return {React.Component} -radio button in  pop up form
   */
function RadioBtn(props) {
  const { myType } = props;
  return (
    <>
      <DialogContentText><Lable> Applies to</Lable></DialogContentText>
      <FormControl sx={{ marginBottom: '30px' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          id="type"
          defaultValue="Posts&comments"
          onChange={(e) => myType(e.target.value)}
        >
          <ContUp condition2="true">
            <Cont>
              <FormControlLabel value="Posts&comments" control={<Radio />} sx={{ margin: 0 }} />
              <Name sx={{ margin: 1 }}>Posts & comments</Name>
            </Cont>
          </ContUp>
          <ContUp>
            <Cont>
              <FormControlLabel value="PostsOnly" control={<Radio />} sx={{ margin: 0 }} />
              <Name sx={{ margin: 1 }}>Posts only</Name>
            </Cont>
          </ContUp>
          <ContUp condition="true">
            <Cont>
              <FormControlLabel value="Commentsonly" control={<Radio />} sx={{ margin: 0 }} />
              <Name sx={{ margin: 1 }}>Comments only</Name>
            </Cont>
          </ContUp>
        </RadioGroup>
      </FormControl>
    </>
  );
}
export default RadioBtn;
