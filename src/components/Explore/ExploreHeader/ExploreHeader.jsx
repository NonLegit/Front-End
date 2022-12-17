import { Typography, Box } from '@mui/material';
import { HeaderContainer, StyledLink } from './styles';
import NavButtons from '../NavButtons/NavButtons';

function ExploreHeader(props) {
  const { title } = props;
  return (
    <HeaderContainer>
      <Box sx={{ padding: '16px 0px' }}>
        <Typography
          fontFamily="sans-serif"
          fontSize="22px"
          color="#1A1A1B"
          fontWeight={600}
        >
          {title}
        </Typography>
        <StyledLink>
          fady
        </StyledLink>
      </Box>
      <NavButtons title={title} />
    </HeaderContainer>
  );
}

export default ExploreHeader;
