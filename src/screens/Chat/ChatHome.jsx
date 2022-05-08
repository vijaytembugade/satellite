import { Flex, Heading, Text,Button } from '@chakra-ui/react';
import React from 'react';
import { SideBar } from '../../components';
import { useSidebarContext } from '../../contexts';

export const ChatHome = () => {
  const { onOpen,btnRef} = useSidebarContext();

  return (
    <div>
      <Flex h="100vh">
        <Heading>
          <title>Chat App Home</title>
        </Heading>

        <SideBar />

        <Flex flex={1} direction="column" justify="center" alignItems="center">
          <Text>Hello and start chatting</Text>
          <Button ref={btnRef} colorScheme="purple" onClick={onOpen} width="10rem">
        Open Chats
      </Button>
        </Flex>
      </Flex>
    </div>
  );
};
