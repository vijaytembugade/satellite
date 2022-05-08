import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';

const ProfileShare = () => {
  const [userDetails, setuserDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const collectionRef = collection(db, 'Users');
    const q = query(collectionRef, where('uid', '==', id));

    getDocs(q).then(snapshot => {
      const newData = snapshot.docs.map(doc => doc.data());

      setuserDetails(newData[0]);
    });
  }, [id]);

  console.log(userDetails);
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
          {userDetails?.email}
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={2}>
        <Text fontSize={{ base: 14, md: 16 }}>Email:</Text>
        <Text fontSize={{ base: 14, md: 16 }} p={3} fontWeight={'bold'}>
          {userDetails?.email}
        </Text>
      </Flex>
      <Flex alignItems={'center'} gap={2}>
        <Text fontSize={{ base: 14, md: 16 }}>About:</Text>
        <Text fontSize={{ base: 12, md: 16 }} p={3}>
          {userDetails?.about}
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
          {userDetails?.skills?.map(item => {
            return (
              <Badge
                textAlign={'center'}
                p={1}
                variant="outline"
                colorScheme="green"
                key={item}
              >
                {item}
              </Badge>
            );
          })}
        </Flex>
      </Flex>

      <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
        <Link href={`${userDetails?.github}`} fontSize={32}>
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link href={userDetails?.twitter} fontSize={32}>
          <i class="fa-brands fa-twitter"></i>
        </Link>
        <Link href={userDetails?.linkedIn} fontSize={32}>
          <i class="fa-brands fa-linkedin"></i>
        </Link>
        <Link href={userDetails?.peerlist} fontSize={32}>
          <i class="fa-solid fa-p"></i>
        </Link>
      </Flex>

      <Flex alignItems={'center'} gap={2} direction="column" py={'3'}>
        <Text fontSize={{ base: 14, md: 16 }}>Projects</Text>
        <Flex wrap={'wrap'}>
          <Link href={userDetails?.project?.first}>
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
          </Link>

          <Link href={userDetails?.project?.second}>
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
          </Link>

          <Link href={userDetails?.project?.third}>
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
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export { ProfileShare };
