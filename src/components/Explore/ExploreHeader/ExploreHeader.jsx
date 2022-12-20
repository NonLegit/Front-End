/* eslint-disable import/no-cycle */
import { Typography, Box } from '@mui/material';
import { HeaderContainer, StyledLink } from './styles';
import NavButtons from '../NavButtons/NavButtons';
import { useHeaderSubtitleContext } from '../../../contexts/HeaderSubtitleContext';

function ExploreHeader(props) {
  const {
    headerSubtitle,
  } = useHeaderSubtitleContext();
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
          {headerSubtitle}
        </StyledLink>
      </Box>
      <NavButtons title={title} />
    </HeaderContainer>
  );
}

export default ExploreHeader;
