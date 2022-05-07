import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import useGoogleLogin from '../../hooks/useGoogleLogin';

export const Auth = () => {
  const { signInWithGoogle } = useGoogleLogin();
  return (
    <Flex alignItems="center" justifyContent="center" mt="20rem" h="full">
      <Button colorScheme="blue" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Flex>
  );
};
