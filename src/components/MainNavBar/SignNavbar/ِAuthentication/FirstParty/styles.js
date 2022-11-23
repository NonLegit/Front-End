/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material/styles';

export const FirstPartyContainer = styled('form')(({ width, mnwidth }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  minWidth: (mnwidth !== undefined) ? `${mnwidth}` : null,
  marginTop: '15px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
}));
