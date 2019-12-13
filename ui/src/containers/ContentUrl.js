import React, {useEffect} from 'react';
import {Flex, Box} from 'rebass';
import {Label, Input} from '@rebass/forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import {useInput} from '../hooks/useInput';
import {useContentContext} from '../hooks/useContent';

const initialState = {
  url: 'https://blog.logrocket.com/design-patterns-in-node-js/',
  loading: false,
  error: null,
  fetch: true,
  data: null
};

export const ContentUrl = () => {
  let context = useContentContext();
  let {url, fetch, loading, error} = context;
  console.log('context', context);
  const blurHandler = (e) => fetch(e.target.value);
  const input = useInput(url, {onBlur: blurHandler});



  return <Flex sx={{color: '#aaa'}}>
    <Box sx={{padding: '0.5em', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Label>url</Label>
    </Box>
    <Box flexGrow={1}><Input sx={{
      border: 0,
      backgroundColor: '#cccccc33'
    }} {...input}/></Box>
    <Box sx={{padding: '0.5em', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {loading ? <FontAwesomeIcon icon={faSpinner} spin={true}/>
      : (error ? <FontAwesomeIcon icon={faTimes} title={error.message}/>
      : <FontAwesomeIcon icon={faCheck}/>)}
    </Box>
  </Flex>
};
