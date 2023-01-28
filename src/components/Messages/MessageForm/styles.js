import styled from '@emotion/styled';

export const Continer = styled('section')(() => ({
  font: 'normal x-small verdana,arial,helvetica,sans-serif',
  background: '#edeff1',
  overflow: 'auto',
}));
export const From = styled('form')(({ theme }) => ({
  padding: '10px 20px',
  margin: '20px auto',
  width: ' 70%',
  font: 'normal x-small verdana,arial,helvetica,sans-serif',
  background: theme.palette.common.white,
  color: '#373c3f',
}));
export const FromHeader = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: 'normal',
  margin: ' 10px 0',
}));
export const InputContiner = styled('div')(() => ({
  marginBottom: '12px',
}));
export const InputLabel = styled('p')(() => ({
  marginBottom: '4px',
  fontSize: 'large',
  width: '70%',
}));
export const SubLabel = styled('span')(() => ({
  color: '#878a8c',
  fontSize: 'smaller',
}));
export const SelectFrom = styled('select')(() => ({
  padding: '3px',
  margin: '4px 0px 0px',
  border: '1px solid gray',
  fontSize: 'large',
  width: '70%',
}));
export const OptionFrom = styled('option')(({ theme }) => ({
  fontSize: 'large',
  '&:hover': {
    background: theme.palette.primary.main,
    boxShadow: '0 0 10px 100px #1882A8 inset',
  },

}));
export const Input = styled('input')(() => ({
  fontSize: 'large',
  width: '70%',

}));
export const TextArea = styled('textarea')(() => ({
  fontSize: 'large',
  height: '100px',
  width: '70%',
}));
export const SubmitButton = styled('button')(({ theme }) => ({
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
export const SubmitAnimation = styled('span')(() => ({
  marginLeft: '12px',
}));
export const Warning = styled('span')(() => ({
  marginTop: '4px',
  display: 'block',
  color: '#ea0027',
  fontSize: 'small',
}));
