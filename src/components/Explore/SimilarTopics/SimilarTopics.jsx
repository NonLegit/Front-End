import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import {
  SimilarTopicsContainer, StyledLink, StyledTopic, StyledTopics,
} from './styles';

const arr = ['link1', 'link2', 'Meta', 'link'];

/**
 * similar topics of the explore page
 * @component
 * @return {React.Component} - similar topics component
 */

function SimilarTopics() {
  return (
    <SimilarTopicsContainer>
      <StyledTopics>
        <Typography fontSize="10px" color="#7C7C7C" fontWeight="bold" marginBottom="10px">
          SIMILAR TOPICS
        </Typography>
        {
          arr.map((item) => (
            <StyledTopic>
              <SearchIcon fontSize="small" />
              <StyledLink href="/" underline="hover">
                {item}
              </StyledLink>
            </StyledTopic>
          ))
        }
      </StyledTopics>
    </SimilarTopicsContainer>
  );
}
export default SimilarTopics;
