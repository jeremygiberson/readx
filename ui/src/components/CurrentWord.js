import React from 'react';
import {Box} from 'rebass';
import { Textfit } from 'react-textfit';

export const CurrentWord = ({text, onSize}) => {
  return <Box width={0.15} sx={{
    display: 'flex',
    color: '#333',
    padding: '1em',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }}>
    <Textfit mode={'single'} onReady={onSize}>{text}</Textfit>
  </Box>
};
