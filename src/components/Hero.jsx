import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Getting Referral{' '}
          <Text as={'span'} color={'purple.500'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.500'}
            _hover={{ bg: 'purple.600' }}
            onClick={() => navigate('/jobs')}
          >
            Get started
          </Button>
          <Button rounded={'full'} px={6} onClick={() => navigate('/jobs')}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
