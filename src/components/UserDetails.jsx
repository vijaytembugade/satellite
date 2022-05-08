import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Badge,
  Flex,
  Text,
  chakra,
  useColorModeValue,
  StatLabel,
  Box,
  Stat,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../contexts';

export const UserDetails = () => {
  const {
    state: { user, profileData },
  } = useAuth();

  return (
    <Box p={{ base: '2', md: '16' }}>
      <Stack my="4" direction={'row'}>
        <Text fontSize="xl" fontWeight="bold">
          Full Name :
        </Text>
        <Text fontSize="xl">{user?.name}</Text>
      </Stack>
      <Stack my="4" direction={'row'}>
        <Text fontSize="xl" fontWeight="bold">
          Current Company :
        </Text>
        <Text fontSize="xl">Infosys</Text>
      </Stack>
      <Box my="4">
        <Text fontSize="xl" fontWeight="bold">
          About Myself :
        </Text>{' '}
        <Text fontSize="xl">{profileData?.about}</Text>
      </Box>
      <Flex gap="4" wrap={'wrap'}>
        <Text fontSize="xl" fontWeight="bold">
          Skills :
        </Text>
        {profileData?.skills.map(item => {
          return (
            <Badge fontSize="0.8em" p="1.5">
              {item}
            </Badge>
          );
        })}
      </Flex>
      {/*  */}
      <chakra.h1
        textAlign={'center'}
        fontSize={{ base: '2xl', md: '3xl' }}
        py={10}
        fontWeight={'bold'}
      >
        Need for Projects to Look for that can bring skills to the table.
      </chakra.h1>
      {/* Card 1 */}
      <Flex gap="10" flexWrap="wrap" p="3">
        <Stat
          px={{ base: 2, md: 4 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'gray.500')}
          rounded={'lg'}
        >
          <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={'medium'} isTruncated>
                <a href={`${profileData?.projects?.first}`}>
                  First Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <ExternalLinkIcon />
            </Box>
          </Flex>
        </Stat>
        {/* 2nd project */}
        <Stat
          px={{ base: 2, md: 4 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'gray.500')}
          rounded={'lg'}
        >
          <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={'medium'} isTruncated>
                <a href={`${profileData?.projects?.second}`}>
                  Second Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <ExternalLinkIcon />
            </Box>
          </Flex>
        </Stat>
        {/* 3rd project */}
        <Stat
          px={{ base: 2, md: 4 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'gray.500')}
          rounded={'lg'}
        >
          <Flex justifyContent={'space-between'}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={'medium'} isTruncated>
                <a href={`${profileData?.projects?.third}`}>
                  Third Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <ExternalLinkIcon />
            </Box>
          </Flex>
        </Stat>
      </Flex>
      {/*  */}
      {/* Projects */}
      <Flex></Flex>
      <Text fontSize="3xl" fontWeight="bold">
        Social Links:
      </Text>
      <Flex justify="space-evenly" gap="15">
        <Text fontSize="4xl">
          <i class="fa-brands fa-github"></i>
        </Text>
        <Text fontSize="4xl">
          <i class="fa-brands fa-linkedin"></i>
        </Text>
        <Text fontSize="4xl">
          <i class="fa-solid fa-p"></i>
        </Text>
        <Text fontSize="4xl">
          <i class="fa-brands fa-twitter"></i>
        </Text>
      </Flex>
    </Box>
  );
};
