import React, {useState} from 'react';
import {Flex} from 'rebass';
import {LeftReview} from './LeftReview';
import {CurrentWord} from './CurrentWord';
import {RightPreview} from './RightPreview';

export const ReaderDisplay = ({review, current, preview, showContext = false}) => {
  const [fontSize, setFontSize] = useState(12);

  const onSize = (size)=> setFontSize(size);

  return <Flex width={1} height={'100px'}>
    <LeftReview visible={showContext} text={review} fontSize={fontSize} width={0.40}/>
    <CurrentWord text={current} onSize={onSize} width={0.20}/>
    <RightPreview visible={showContext} text={preview} fontSize={fontSize} width={0.40}/>
  </Flex>
};
