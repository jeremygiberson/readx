import React, {useEffect, useState} from 'react';
import {useInterval} from '../hooks/useInterval';

export const Autoplay = ({onPlay, onPause}) => {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      console.log(e);
      if(e.code === 'Space') {
        setPlay(!play);
        if(typeof onPause === 'function') {
          onPause(play);
        }
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [play]);

  useInterval(() => {
    if(play && typeof onPlay === 'function'){
      onPlay();
    }
  }, 200);

  return null;
};
