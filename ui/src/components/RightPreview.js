import React from 'react';
import {Box} from 'rebass';

export const RightPreview = ({text, width=1, fontSize=100, visible=false}) => {
  return <Box flexGrow={1} sx={{
    fontSize: `${fontSize}px`,
    color: '#ccc',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
//    backgroundColor: '#aaffaa55',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }} width={width}>{visible ? text:null}</Box>
};
