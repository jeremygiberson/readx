import React from 'react';
import {Box} from 'rebass';

export const LeftReview = ({text, width=1, fontSize=100, visible=false}) => {
  return <Box flexGrow={1} sx={{
    fontSize: `${fontSize}px`,
    color: '#ccc',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    direction: 'rtl',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //backgroundColor: '#ffaaaa55'
  }} width={width}>{visible ? text:null}</Box>
};
