import React, {createContext, useEffect, useContext} from 'react';
import {useReducerWithLocalStorage} from '../hooks/useReducerWithLocalStorage';

const initialState = {
  url: 'https://blog.logrocket.com/design-patterns-in-node-js/',
  loading: false,
  error: null,
  fetch: true,
  data: null
};

const init = () => initialState;

const reducer = (state, action) => {
  switch(action.type) {
    case 'fetch':
      return {url: action.payload, fetch: true, loading: false, error: null, data: null};
    case 'loading':
      return {url: state.url, error: null, loading: true, data: null, fetch: false};
    case 'loaded':
      return {url: state.url, error: null, loading: false, data: action.payload, fetch: false};
    case 'error':
      return {url: state.url, error: action.payload, loading: false, data: null, fetch: false};
    default:
      return state;
  }
};

const context = createContext({});

export const useContentProvider = () => {
  const [state, dispatch] = useReducerWithLocalStorage(reducer, initialState, 'contentUrl', init);

  useEffect(() => {
    if(!state.fetch){ console.log('wont fetch'); return }
    console.log('fetching', state.url);
    fetch('https://cors-anywhere.herokuapp.com/' + state.url, {})
      .then(r => r.text())
      .then(r => { console.log('fetched', r); return r;})
      .then(r => fetch('http://localhost:3080/unfluff', {
        method: 'POST',
        body: r
      }))
      .then(r => r.text())
      .then(r => JSON.parse(r))
      .then(r => dispatch({type: 'loaded', payload: r.text}))
      .catch(e => dispatch({type: 'error', payload: e}));
    dispatch({type: 'loading'});
  }, [state, dispatch]);

  const doFetch = url => {
    dispatch({type: 'fetch', payload: url});
  };

  let Value = {...state, fetch: doFetch};


  return {Provider: context.Provider, Value};
};

export const useContentContext = () => {
  return useContext(context);
};
