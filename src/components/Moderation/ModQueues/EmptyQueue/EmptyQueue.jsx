import { Typography } from '@mui/material';
import {
  EmptyBox, Image,
} from './styles';
import Filter from '../Filter/Filter';

function EmptyQueue() {
  return (
    <>
      <Filter />
      <EmptyBox>
        <Image src="https://www.redditstatic.com/desktop2x/img/snoomoji/cat_blep.png" />
        <Typography variant="h6">The queue is clean!</Typography>
        <Typography variant="subtitle2" sx={{ color: '#7c7c7c' }}>Kitteh is pleased</Typography>
      </EmptyBox>
    </>
  );
}

export default EmptyQueue;
