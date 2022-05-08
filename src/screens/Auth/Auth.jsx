import { Button, Center, Flex, Image, Text } from '@chakra-ui/react';
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
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="90vh"
    >
      <Button
        onClick={signInWithGoogle}
        border={3}
        borderWidth="4"
        borderColor="blackAlpha.100"
        p={5}
      >
        <Image
          borderRadius="full"
          boxSize="20px"
          src="https://www.pikpng.com/pngl/b/44-442110_jpg-black-and-white-library-google-logo-png.png"
          alt="Google"
        />
        <Text ml={'4'} color="black">
          Sign in with Google
        </Text>
      </Button>
      <Image
        src="/assets/svgs/business-deal.svg"
        boxSize="80%"
        w={{ base: '90%', sm: '80%', md: '50%', lg: '35%' }}
      />
    </Flex>
  );
};
