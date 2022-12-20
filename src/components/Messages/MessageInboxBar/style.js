import styled from '@emotion/styled';

export const Header = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  font: 'normal x-small verdana,arial,helvetica,sans-serif',
  marginBottom: '12px',

}));
export const HeaderContainer = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  margin: ' 0px 0px 0px 20px',
  padding: '0px',
  flexWrap: 'wrap',
  gap: '10px',
  '& .link': {
    textDecoration: 'none',
  },
}));
export const HeaderTabs = styled('li')(({ active }) => ({
  color: '#bed7eb ',
  borderBottom: active ? '2px solid white' : '',
  padding: '0 10px',
  marginTop: '10px',
  marginBottom: '0px',
  cursor: 'pointer',
  fontSize: 'small',
  fontWeight: 'bold',
  '&:hover': {
    borderBottom: '2px solid white',
  },
}));
