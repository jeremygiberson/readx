import React, {} from 'react';
import {Reader} from '../containers/Reader';
import {Flex, Box} from 'rebass';
import {ContentUrl} from '../containers/ContentUrl';
import {useContentProvider} from '../hooks/useContent';

export const Layout = () => {
  let {Provider, Value} = useContentProvider();

  return <Provider value={Value}>
    <Flex flexDirection={'column'} height={'100%'}>
      <Box sx={{padding: '0.5em'}}>
        <Flex>
          <Box width={0.1}/>
          <Box flexGrow={1}><ContentUrl/></Box>
          <Box width={0.1}/>
        </Flex>
      </Box>
      <Box flexGrow={1}/>
      <Box flexGrow={1}>
        <Reader/>
      </Box>
      <Box flexGrow={1}/>
    </Flex>
  </Provider>
};
