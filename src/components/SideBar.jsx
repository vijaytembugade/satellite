import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text } from '@chakra-ui/layout';
import { useAuth, useSidebarContext } from '../contexts';
import useCollection from '../hooks/useCollection';
import { getOtherEmail } from '../util/getOtherEmail';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

export const SideBar = () => {
  const {
    state: { user },
  } = useAuth();

  const { documents } = useCollection('chats');
  const chats = documents;
  const navigate = useNavigate();
  const { isOpen, onClose, btnRef } = useSidebarContext();

  const chatList = () => {
    return chats
      ?.filter(chat => chat.users.includes(user.email))
      .map(chat => (
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          _hover={{ bg: 'gray.100', cursor: 'pointer' }}
          onClick={() => {
            navigate(`/chat/${chat.id}`);
            onClose();
          }}
        >
          <Avatar src="" marginEnd={3} name={getOtherEmail(chat.users, user)} />
          <Text>
            {getOtherEmail(chat.users, user).substring(
              0,
              getOtherEmail(chat.users, user).lastIndexOf('@')
            )}
          </Text>
        </Flex>
      ));
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex align="center">
              <Avatar src={user?.photo} marginEnd={3} />
              <Text>{user?.name}</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex overflowX="scroll" direction="column" flex={1}>
              {chatList()}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
