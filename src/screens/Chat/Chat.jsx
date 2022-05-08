import { Flex, Heading, Text } from '@chakra-ui/react';
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

export const Chat = () => {
  const { chatId } = useParams();
  console.log(chatId);
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
          alignSelf={sender ? 'flex-start' : 'flex-end'}
          bg={sender ? 'blue.100' : 'green.100'}
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

  return (
    <div>
      <Flex h="100vh">
        <Heading>
          <title>Chat App</title>
        </Heading>

        <SideBar />

        <Flex flex={1} direction="column">
          <TopBar email={getOtherEmail(chat?.users, user)} />

          <Flex
            flex={1}
            direction="column"
            pt={4}
            mx={5}
            overflowX="scroll"
            sx={{ scrollbarWidth: 'none' }}
          >
            {getMessages()}
          </Flex>

          <BottomBar id={chatId} user={user} />
        </Flex>
      </Flex>
    </div>
  );
};
