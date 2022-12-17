import {
  Box, Button, List, Tooltip, tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const AboutCountainer = styled('div')({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  backgroundColor: '#ffffff',
  borderRadius: '3px 3px 0 0',
  color: '#1a1a1b',
  display: 'flex',
  fill: '#1a1a1b',
  padding: '0 12px 12px',
  textTransform: 'uppercase',
  margin: 0,
});

export const AboutString = styled('h2')({
  padding: '12px 0 0',
  margin: 0,
  fontSize: 14,
  fontWeight: 700,
  textTransform: 'none',
});

export const More = styled('button')({
  margin: 'auto 0 auto auto',
  verticalAlign: 'middle',
  borderRadius: 2,
  height: 24,
  padding: '12px 2px 0 4px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

export const AboutContent = styled('h2')({
  padding: 12,
  margin: 0,
  color: '#1c1c1c',
  fill: '#1c1c1c',
  wordWrap: 'break-word',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  // height: 127,
});
export const AboutDisc = styled('h2')({
  marginBottom: 8,
  position: 'relative',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  wordWrap: 'break-word',

});

export const Created = styled('div')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  display: 'flex',
  flexFlow: 'row nowrap',
  marginTop: 1,
  paddingLeft: 12,
});

export const Icon = styled('div')({
  fontSize: 20,
  fontWeight: 400,
  height: 20,
  verticalAlign: 'middle',
  width: 20,
  margin: '0px 8px 0 8px',

});

export const CreatedSpan = styled('h2')({
  color: '#7c7c7c',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  fontSize: 16,
  fontWeight: 400,
});
export const Hr = styled('hr')({
  backgroundColor: '#1a1a1b12',
  border: 'none',
  height: 1,
  margin: '16px 0',
});
export const Bold = styled('div')({
  fontSize: 16,
  fontWeight: 500,
});
export const SpecialBold = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  '&:before': {
    content: '"●"',
    marginRight: 4,
    color: '#46d160',
  },
});
export const Light = styled('p')({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  wordBreak: 'break-word',
  marginTop: 0,
});
export const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
}));

export const CreatPost = styled(Button)(({
  fontSize, padding, fontWeight,
}) => ({
  boxShadow: 'none',
  fontSize,
  padding,
  borderRadius: 20,
  textTransform: 'initial',
  minWidth: 'auto',
  fontWeight,
  margin: '14.4px',
  backgroundColor: '#0079d3',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1484d6',
  },
}));

export const Admin = styled(Link)({
  display: 'flex',
  marginRight: 5,
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#e8e8e8',
    color: 'black',
  },
  color: 'black',
  textDecoration: 'none',
});

export const New = styled(Box)({
  fontSize: 12,
  color: '#ff4500',
  textTransform: 'uppercase',
  marginRight: 4,
  fontWeight: 700,
  paddingLeft: 12,
});
export const Select = styled('p')({
  fontSize: 16,
  fontWeight: 500,
  background: 'none',
  border: 'none',
  color: '#0079d3',
  padding: '4px  0',
  textAlign: 'left',
  // maxHeight: 25,
  cursor: 'pointer',
  height: 28,
  margin: 0,

});

export const Lists = styled(List)({
  width: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
  '& ul': { padding: 0 },
  '& ul>li': {
    paddingTop: 0,
    '&:hover': {
      backgroundColor: '#0079d3',
      color: 'white',
    },
  },
  position: 'absolute',
  zIndex: 1,
  height: 200,
});

export const SelectContainer = styled(Box)({
  display: 'flex',
  textAlign: 'left',
  width: '100%',
  alignItems: 'center',
  paddingLeft: '12px',
});

export const StyledTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#288eda',
  },

}));
