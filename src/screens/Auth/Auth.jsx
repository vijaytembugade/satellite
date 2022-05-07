import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import useGoogleLogin from '../../hooks/useGoogleLogin';

export const Auth = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const { signInWithGoogle } = useGoogleLogin();
  return (
    <Flex alignItems="center" justifyContent="center" mt="20rem" h="full">
      <Button
        onClick={signInWithGoogle}
        border={3}
        borderWidth="4"
        borderColor="blackAlpha.100"
        p={8}
      >
        <Image
          borderRadius="full"
          boxSize="30px"
          src="https://www.pikpng.com/pngl/b/44-442110_jpg-black-and-white-library-google-logo-png.png"
          alt="Dan Abramov"
        />
        <Text ml={'4'} color="black">
          Sign in with Google
        </Text>
      </Button>
    </Flex>
  );
};
