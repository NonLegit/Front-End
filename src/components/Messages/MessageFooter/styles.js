import styled from '@emotion/styled';
import { Link } from '@mui/material';

const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: 'small',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:active': {
    color: theme.palette.primary.light,
  },
}));
const HeadLinks = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,

}));
export {
  Links, HeadLinks,
};
