import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './flirtServer';
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
  const [show, setShow] = useState(false);
  const { Name } = useParams();
  const [data, dataError] = useFetch(Name);
  console.log(data);

  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);
  useEffect(() => {
    setFalir(data);
    console.log(dataError);
  }, [flair, data]);

  return (
    <div>
      { flair
        && (
        <>
          <Container>
            <String>
              Filter by flair
            </String>
          </Container>
          <Box sx={{ padding: '12px' }}>
            { (flair.slice(0, 8))?.map((entity, index) => (
              <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
                <Button key={`${index + 0}`} backgroundColor={entity.backgroundColor}><Span color={entity.textColor}>{entity.text}</Span></Button>
              </Box>
            ))}
            show &&
            { (flair.slice(8))?.map((entity, index) => (
              <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
                <Button key={`${index + 0}`} backgroundColor={entity.backgroundColor}><Span color={entity.textColor}>{entity.text}</Span></Button>
              </Box>
            ))}
          </Box>
          {show
          && <See onClick={() => { setShow(true); }}> See more </See>}
          {!show
          && <See onClick={() => { setShow(false); }}> See Less </See>}
        </>
        )}
    </div>
  );
}

export default Flirt;
