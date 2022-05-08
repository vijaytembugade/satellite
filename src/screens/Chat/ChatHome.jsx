import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { SideBar } from '../../components';

export const ChatHome = () => {
  return (
    <div>
      <Flex h="100vh">
        <Heading>
          <title>Chat App Home</title>
        </Heading>

        <SideBar />

        <Flex flex={1} direction="column">
          <Text>Hello and start chatting</Text>
        </Flex>
      </Flex>
    </div>
  );
};
