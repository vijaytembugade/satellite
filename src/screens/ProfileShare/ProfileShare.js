import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ProfileShare = () => {
  return (
    <Box
      px={{ base: 20, md: 100 }}
      py={{ base: 50, md: 50 }}
      mx={{ base: 10, md: 200 }}
      my={{ base: 10, md: 50 }}
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
      border={'1px'}
    >
      <Flex alignItems={'center'} gap={2}>
        <Text fontSize={{ base: 14, md: 16 }}>Name:</Text>
        <Text fontSize={{ base: 16, md: 32 }} p={3} fontWeight={'bold'}>
          Vijay Tembugade
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={2}>
        <Text fontSize={{ base: 14, md: 16 }}>Email:</Text>
        <Text fontSize={{ base: 14, md: 24 }} p={3} fontWeight={'bold'}>
          vijaytembugade21@gmail.com
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={2}>
        <Text fontSize={{ base: 14, md: 16 }}>About:</Text>
        <Text fontSize={{ base: 12, md: 16 }} p={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure illum
          libero perspiciatis asperiores! Magni iure rerum voluptatem sit
          voluptates incidunt, ipsam, sapiente labore laborum dolorem nesciunt
          dolore ullam eos expedita?
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={6}>
        <Text fontSize={{ base: 14, md: 16 }}>Skills: </Text>
        <Flex
          fontSize={{ base: 12, md: 16 }}
          p={3}
          gap={{ base: 2, md: 6 }}
          wrap={'wrap'}
        >
          <Badge
            textAlign={'center'}
            p={1}
            variant="outline"
            colorScheme="green"
          >
            react
          </Badge>
          <Badge textAlign={'center'} p={1} variant="solid" colorScheme="green">
            angular
          </Badge>
          <Badge
            textAlign={'center'}
            p={1}
            variant="subtle"
            colorScheme="green"
          >
            Removed
          </Badge>
        </Flex>
      </Flex>

      <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
        <Link fontSize={32}>
          <i class="fa-brands fa-github"></i>
        </Link>
        <Text fontSize={32}>
          <i class="fa-brands fa-twitter"></i>
        </Text>
        <Text fontSize={32}>
          <i class="fa-brands fa-linkedin"></i>
        </Text>
        <Text fontSize={32}>
          <i class="fa-solid fa-p"></i>
        </Text>
      </Flex>

      <Flex alignItems={'center'} gap={2} direction="column" py={'3'}>
        <Text fontSize={{ base: 14, md: 16 }}>Projects</Text>
        <Flex wrap={'wrap'}>
          <Flex
            fontSize={{ base: 14, md: 16 }}
            p={3}
            fontWeight={'bold'}
            cursor="pointer"
            textAlign={'center'}
            gap={2}
          >
            Project 1
            <ExternalLinkIcon alignSelf={'center'} />
          </Flex>
          <Flex
            fontSize={{ base: 14, md: 16 }}
            p={3}
            fontWeight={'bold'}
            cursor="pointer"
            textAlign={'center'}
            gap={2}
          >
            Project 2
            <ExternalLinkIcon alignSelf={'center'} />
          </Flex>
          <Flex
            fontSize={{ base: 14, md: 16 }}
            p={3}
            fontWeight={'bold'}
            cursor="pointer"
            textAlign={'center'}
            gap={2}
          >
            Project 3
            <ExternalLinkIcon alignSelf={'center'} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export { ProfileShare };
