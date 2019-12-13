import React, {useState} from 'react';
import {ReaderDisplay} from '../components/ReaderDisplay';
import {Autoplay} from './Autoplay';
import {useContentContext} from '../hooks/useContent';

export const Reader = () => {
  const [index, setIndex] = useState(2);
  const [paused, setPaused] = useState(false);
  const {data: phrase} = useContentContext();
  //const phrase = 'The quick brown fox jumped over the lazy dog.';
  let parts = (phrase || 'Type an address to start reading').split(' ');

  const advance = () => {
    let i = index + 1;
    if(i >= parts.length) { i = 0; }
    // Your custom logic here
    setIndex(i);
  };

  const props = {
    current: parts[index],
    review: parts.slice(Math.max(0, index - 6), index).join(' '),
    preview: parts.slice(index + 1, index + 6).join(' ')
  };
  return <React.Fragment>
    <Autoplay onPlay={advance} onPause={paused => setPaused(paused)}/>
    <ReaderDisplay {...props} showContext={paused}/>;
  </React.Fragment>;
};
