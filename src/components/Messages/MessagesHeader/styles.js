import styled from '@emotion/styled';

const Header = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  font: 'normal x-small verdana,arial,helvetica,sans-serif',
  margin: 0,

}));
const HeaderContainer = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  margin: ' 0px 0px 0px 20px',
  padding: '0px',
  flexWrap: 'wrap',
  '& .link': {
    textDecoration: 'none',
  },
}));
const HeaderTabs = styled('li')(({ active }) => ({
  color: active ? '#80bce9' : '#bed7eb ',
  padding: '0 10px',
  marginTop: '20px',
  marginBottom: '20px',
  cursor: 'pointer',
  fontSize: 'initial',
  fontWeight: 'bold',

}));
export { Header, HeaderTabs, HeaderContainer };
