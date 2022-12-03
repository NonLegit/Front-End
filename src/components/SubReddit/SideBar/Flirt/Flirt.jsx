import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import {
  Button,
  Container, See, Span, String,
} from './style';
/**
 * Filter section
 * @component
 * @return {React.Component} - Filter section
 */
function Flirt() {
  const [flair, setFalir] = useState([]);
  const { Name } = useParams();
  const [data, dataError, statusCode] = useFetch(`/subreddits/${Name}/flair`);
  console.log(data);

  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);
  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
    setFalir(data);
    console.log(dataError);
  }, [flair, data, statusCode]);

  return (
    <>
      <Container>
        <String>
          Filter by flair
        </String>
      </Container>
      <Box sx={{ padding: '12px' }}>
        { flair?.map((entity, index) => (
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
