import { Flex, Heading, Avatar, Button, useColorMode } from '@chakra-ui/react';
import { useSidebarContext } from '../contexts';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const TopBar = ({ email }) => {
  const { onOpen, btnRef } = useSidebarContext();
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'purple.100' : 'gray.700'}
      h="81px"
      w="100%"
      align="center"
      p={5}
    >
      <Button
        ref={btnRef}
        bg={'purple.400'}
        onClick={onOpen}
        mr={3}
        _hover={{ bg: 'purple.600' }}
      >
        <ArrowForwardIcon />
      </Button>
      <Avatar src="" name={email} mr={3} />
      <Heading size="lg">
        {email?.length > 10 ? `${email?.slice(0, 11)}...` : email}
      </Heading>
    </Flex>
  );
};
