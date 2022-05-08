import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Text,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Stack,
  Flex,
  Button,
} from '@chakra-ui/react';
import { db } from '../firebase/config';
import { doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

function ReferalAccordian({ id }) {
  const [apliedByusers, setAplliedBYUser] = useState([]);
  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const collectionRef = await doc(db, 'Jobs', id);
        const docSnap = await getDoc(collectionRef);
        const appliedByIds = docSnap.data()?.appliedBy;

        getDocs(collection(db, 'Users')).then(snapshot => {
          const newData = snapshot.docs.map(doc => ({
            id: doc.data().uid,
            data: doc.data(),
          }));

          setAplliedBYUser(
            newData.filter(item => appliedByIds.includes(item.id))
          );
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  const navigate = useNavigate();

  const newChat = async otherMail => {
    const { id } = await addDoc(collection(db, 'chats'), {
      users: [user.email, otherMail],
    });
    navigate(`/chat/${id}`);
  };

  return (
    <div>
      <Accordion
        allowMultiple
        allowToggle
        my="2"
        width={{ base: '100%', md: '40%' }}
      >
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blue.400', color: 'black' }}>
              <Box flex="1" textAlign="left">
                Following People have Asked for Referal
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {apliedByusers?.map(user => {
              return (
                <Box
                  borderBottom={'1px'}
                  p={2}
                  borderColor={'gray.300'}
                  key={user?.id}
                >
                  <Stack direction={'row'}>
                    <Text>User id:</Text>
                    <Text fontWeight={'bold'}>{user?.id}</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <Text>User email</Text>
                    <Text fontWeight={'bold'}>{user?.data?.email}</Text>
                  </Stack>
                  <Flex gap={4}>
                    <Button
                      colorScheme={'teal'}
                      onClick={() => newChat(user?.data?.email)}
                    >
                      Start Chat
                    </Button>
                    <Link to={`/share/profile/${user?.id}`}>
                      <Button colorScheme={'teal'}>See profile</Button>
                    </Link>
                  </Flex>
                </Box>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { ReferalAccordian };
