import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Container, See, Span, String,
} from './style';
/**
 * Filter section
 * @component
 * @return {React.Component} - Filter section
 */
function Flirt(props) {
  const [flair, setFalir] = useState([]);
  const { Name } = useParams();
  const { client } = props;
  useEffect(() => {
    client.get(`subreddits/${Name}/flairs/200`) // fetch api
      .then((actualData) => {
        setFalir(actualData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container>
        <String>
          Filter by flair
        </String>
      </Container>
      <Box sx={{ padding: '12px' }}>
        { flair.map((entity, index) => (
          <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
            <Button key={`${index + 0}`} backgroundColor={entity.backgroundColor}><Span color={entity.textColor}>{entity.text}</Span></Button>
          </Box>
        ))}
      </Box>
      <See>See more</See>
    </>
  );
}

export default Flirt;
