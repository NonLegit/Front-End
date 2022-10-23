import styled from '@emotion/styled';

const Continer = styled('section')(() => ({
  background: '#edeff1',
  overflow: 'auto',
}));
const From = styled('form')(({ theme }) => ({
  padding: '10px 20px',
  margin: '20px auto',
  width: ' 70%',
  minWidth: '700px',
  font: 'normal x-small verdana,arial,helvetica,sans-serif',
  background: theme.palette.common.white,
  color: '#373c3f',
}));
const FromHeader = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: 'normal',
  margin: ' 10px 0',
}));
const InputContiner = styled('div')(() => ({
  marginBottom: '12px',
}));
const InputLabel = styled('p')(() => ({
  marginBottom: '4px',
  fontSize: 'large',
}));
const SubLabel = styled('span')(() => ({
  color: '#878a8c',
  fontSize: 'smaller',
}));
const SelectFrom = styled('select')(() => ({
  width: '492px',
  padding: '3px',
  margin: '4px 0px 0px',
  border: '1px solid gray',
  fontSize: 'large',
}));
const OptionFrom = styled('option')(({ theme }) => ({
  fontSize: 'large',
  '&:hover': {
    background: theme.palette.primary.main,
    boxShadow: '0 0 10px 100px #1882A8 inset',
  },

}));
const Input = styled('input')(() => ({
  fontSize: 'large',
  width: '492px',
}));
const TextArea = styled('textarea')(() => ({
  fontSize: 'large',
  width: '492px',
  height: '100px',
}));
const SubmitButton = styled('button')(({ theme }) => ({
  padding: '6px 16px 4px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bold',
  borderColor: '#00497f',
  borderStyle: 'solid',
  borderWidth: '0px 2px 2px 0px',
  cursor: 'pointer',
  borderRadius: '4px',
  marginTop: '12px',
}));
const SubmitAnimation = styled('span')(() => ({
  marginLeft: '12px',
}));
const Warning = styled('span')(() => ({
  marginTop: '4px',
  display: 'block',
  color: '#ea0027',
  fontSize: 'small',
}));
export {
  From, Continer, FromHeader, InputContiner, InputLabel, SelectFrom, OptionFrom, Input, SubLabel,
  SubmitButton, TextArea, SubmitAnimation, Warning,
};
