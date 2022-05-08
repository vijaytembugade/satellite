import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BottomBar, SideBar, TopBar } from '../../components';

export const Chat = () => {
  const Msg1 = () => {
    return (
      <Flex
        bg="blue.100"
        w="fit-content"
        minWidth="100px"
        borderRadius="lg"
        // alignSelf="flex-end"
        p={3}
        m={1}
      >
        <Text>This is first msg</Text>
      </Flex>
    );
  };
  const Msg2 = () => {
    return (
      <Flex
        bg="green.100"
        w="fit-content"
        minWidth="100px"
        borderRadius="lg"
        alignSelf="flex-end"
        p={3}
        m={1}
      >
        <Text>This is first msg</Text>
      </Flex>
    );
  };
  return (
    <div>
      <Flex h="100vh">
        <Heading>
          <title>Chat App</title>
        </Heading>

        <SideBar />

        <Flex flex={1} direction="column">
          <TopBar />
          {/* email={getOtherEmail(chat?.users, user)} */}

          {/* <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{scrollbarWidth: "none"}}>
          {getMessages()}
          <div ref={bottomOfChat}></div>
        </Flex> */}
          <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" scrollbarWidth= "none">
            <Msg2 />
            <Msg1 />
            <Msg2 />
            <Msg1 />
            <Msg1 />
            <Msg1 />
            <Msg2 />
            <Msg1 />
            <Msg2 />
            <Msg1 />
            <Msg1 />
            <Msg1 />
            <Msg1 />
            <Msg2 />
          </Flex>
          <BottomBar />
          {/* id={id} user={user} */}
        </Flex>
      </Flex>
    </div>
  );
};
