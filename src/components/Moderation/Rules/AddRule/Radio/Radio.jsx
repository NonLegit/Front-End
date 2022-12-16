import {
  DialogContentText,
  FormControl, FormControlLabel, Radio, RadioGroup,
} from '@mui/material';
// import React from 'react';
import {
  Cont, ContUp, Lable, Name,
} from './style';
/**
   *@component
   * @param {object} props
   * @return {React.Component} -radio button in  pop up form
   */
function RadioBtn(props) {
  const { myType, type } = props;
  console.log(type);
  // React.useEffect(() => {
  //   if (type) {
  //     myType(type);
  //   } else {
  //     myType('Posts&comments');
  //   }
  // }, [type]);
  return (
    <>
      <DialogContentText><Lable> Applies to</Lable></DialogContentText>
      <FormControl sx={{ marginBottom: '30px' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          id="type"
          defaultValue={type}
          onChange={(e) => myType(e.target.value)}
        >
          <ContUp>
            <Cont>
              <FormControlLabel value="Posts&comments" control={<Radio />} sx={{ margin: 0 }} />
              <Name>Posts & comments</Name>
            </Cont>
          </ContUp>
          <ContUp>
            <Cont>
              <FormControlLabel value="PostsOnly" control={<Radio />} sx={{ margin: 0 }} />
              <Name>Posts only</Name>
            </Cont>
          </ContUp>
          <ContUp>
            <Cont>
              <FormControlLabel value="CommentsOnly" control={<Radio />} sx={{ margin: 0 }} />
              <Name>Comments only</Name>
            </Cont>
          </ContUp>
        </RadioGroup>
      </FormControl>
    </>
  );
}
export default RadioBtn;
