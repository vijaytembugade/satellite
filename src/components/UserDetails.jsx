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
      <Box my="4">
        <Text fontSize="xl" fontWeight="bold">
          About Myself :
        </Text>
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

      <chakra.h1
        textAlign={'center'}
        fontSize={{ base: '2xl', md: '2xl' }}
        py={10}
        fontWeight={'bold'}
      >
        Upload your best 3 Projects.
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
                <a
                  href={`${profileData?.project?.first}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  First Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <a
                href={`${profileData?.project?.first}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon />
              </a>
            </Box>
          </Flex>
        </Stat>
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
                <a
                  href={`${profileData?.project?.second}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Second Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <a
                href={`${profileData?.project?.second}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon />
              </a>
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
                <a
                  href={`${profileData?.project?.third}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Third Project Name
                </a>
              </StatLabel>
            </Box>
            <Box
              my={'auto'}
              color={useColorModeValue('gray.800', 'gray.200')}
              alignContent={'center'}
            >
              <a
                href={`${profileData?.project?.third}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon />
              </a>
            </Box>
          </Flex>
        </Stat>
      </Flex>
     
      {/* Projects */}
      <Text my="10px" textAlign="center" fontSize="2xl" fontWeight="bold">
        Social Links
      </Text>
      <Flex justifyContent="center" gap="8">
        <a href={profileData?.github} target="_blank" rel="noreferrer">
          <Text
            fontSize="4xl"
            cursor="pointer"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </Text>
        </a>
        <a href={profileData?.linkedIn} target="_blank" rel="noreferrer">
          <Text fontSize="4xl" cursor="pointer">
            <i class="fa-brands fa-linkedin"></i>
          </Text>
        </a>
        <a href={profileData?.peerlist} target="_blank" rel="noreferrer">
          <Text fontSize="4xl" cursor="pointer">
            <i class="fa-solid fa-p"></i>
          </Text>
        </a>
        <a href={profileData?.twitter} target="_blank" rel="noreferrer">
          <Text fontSize="4xl" cursor="pointer">
            <i class="fa-brands fa-twitter"></i>
          </Text>
        </a>
      </Flex>
    </Box>
  );
};
