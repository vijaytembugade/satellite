import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import useLogout from '../../hooks/useLogout';

export const Role = () => {
  const { logout } = useLogout();
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        mt="10rem"
        textAlign="center"
      >
        <Text fontSize="5xl">Welcome to Satellite!!🛰</Text>
        <Text fontSize="3xl"> What you want to go ahead with ?</Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="2"
          direction={{ base: 'column', md: 'row' }}
        >
          <Button
            colorScheme="blue"
            variant="outline"
            p="8"
            h="30"
            fontSize="2xl"
          >
            Are you a First time Job Seaker ?
          </Button>
          <Text fontSize="2xl" p="6">
            OR
          </Text>
          <Button
            colorScheme="blue"
            variant="outline"
            p="8"
            h="30"
            fontSize="2xl"
          >
            Are you already a Working Professional ?
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
