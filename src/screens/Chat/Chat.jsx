import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BottomBar, SideBar, TopBar } from '../../components';
import { useAuth } from '../../contexts';
import { db } from '../../firebase/config';
import { getOtherEmail } from '../../util/getOtherEmail';
import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import { useSidebarContext } from '../../contexts';

export const Chat = () => {
  const { chatId } = useParams();

  const {
    state: { user },
  } = useAuth();

  const [chat] = useDocumentData(doc(db, 'chats', chatId));
  const q = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy('timeAt')
  );
  const [messages] = useCollectionData(q);

  const getMessages = () =>
    messages?.map(msg => {
      const sender = msg.sender === user.email;
      return (
        <Flex
          key={Math.random()}
          alignSelf={sender ? 'flex-end' : 'flex-start'}
          bg={sender ? 'green.100' : 'blue.100'}
          w="fit-content"
          minWidth="100px"
          borderRadius="lg"
          p={3}
          m={1}
        >
          <Text>{msg.text}</Text>
        </Flex>
      );
    });
  const { onOpen, btnRef } = useSidebarContext();

  return (
    <div>
      <Flex h="90vh">
        <Heading>
          <title>Chat App</title>
        </Heading>

        <SideBar btnRef={btnRef} />

        <Flex flex={1} direction="column">
          <TopBar
            email={getOtherEmail(chat?.users, user)}
            open={onOpen}
            btnRef={btnRef}
          />

          <Flex
            flex={1}
            direction="column"
            pt={4}
            mx={5}
            overflowX="hidden"
            sx={{ scrollbarWidth: 'none' }}
          >
            {!messages && (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                m="auto"
              />
            )}
            {getMessages()}
          </Flex>

          <BottomBar id={chatId} user={user} />
        </Flex>
      </Flex>
    </div>
  );
};
