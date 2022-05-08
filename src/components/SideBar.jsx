import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/layout';
import { useAuth } from '../contexts';
import useCollection from '../hooks/useCollection';
import { getOtherEmail } from '../util/getOtherEmail';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

export const SideBar = () => {
  const {
    state: { user },
  } = useAuth();

  const { documents } = useCollection('chats');

  const chats = documents;

  const chatExists = email =>
    chats?.find(
      chat => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const newChat = async () => {
    const input = prompt('Enter email of chat recipient');
    if (!chatExists(input) && input !== user.email) {
      await addDoc(collection(db, 'chats'), { users: [user.email, input] });
    }
  };

  const navigate = useNavigate();

  const chatList = () => {
    return chats
      ?.filter(chat => chat.users.includes(user.email))
      .map(chat => (
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: 'gray.100', cursor: 'pointer' }}
          onClick={() => navigate(`/chat/${chat.id}`)}
        >
          <Avatar src="" marginEnd={3} />
          <Text>{getOtherEmail(chat.users, user)}</Text>
        </Flex>
      ));
  };

  return (
    <Flex
      h="100%"
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        h="81px"
        w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={3}
      >
        <Flex align="center">
          <Avatar src={user?.photo} marginEnd={3} />
          <Text>{user?.name}</Text>
        </Flex>
      </Flex>

      <Button m={5} p={4} onClick={newChat}>
        New Chat
      </Button>

      <Flex overflowX="scroll" direction="column" flex={1}>
        {chatList()}
      </Flex>
    </Flex>
  );
};
