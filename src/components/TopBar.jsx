import { Flex, Heading, Avatar, Button } from '@chakra-ui/react';
import { useSidebarContext } from '../contexts';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const TopBar = ({ email }) => {
  const { onOpen, btnRef } = useSidebarContext();
  return (
    <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} mr={3}>
        <ArrowForwardIcon />
      </Button>
      <Avatar src="" name={email} mr={3} />
      <Heading size="lg">
        {email?.length > 10 ? `${email?.slice(0, 11)}...` : email}
      </Heading>
    </Flex>
  );
};
