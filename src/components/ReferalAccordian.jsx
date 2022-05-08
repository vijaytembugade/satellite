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
  useColorMode,
} from '@chakra-ui/react';
import { db } from '../firebase/config';
import { doc, getDoc, collection, getDocs, addDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

function ReferalAccordian({ id }) {
  const { colorMode } = useColorMode();
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
        width={{ base: '100%', md: '60%' }}
      >
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'gray.300', color: 'black' }}>
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
                  borderColor={'purple.800'}
                  key={user?.id}
                >
                  <Stack direction={'row'}>
                    <Text>User email: </Text>
                    <Text fontWeight={'bold'}>{user?.data?.email}</Text>
                  </Stack>

                  <Flex gap={4} mt={4} wrap="wrap">
                    <Button
                      colorScheme="teal"
                      onClick={() => newChat(user?.data?.email)}
                    >
                      Start Chat
                    </Button>
                    <Link to={`/share/profile/${user?.id}`}>
                      <Button
                        colorScheme={
                          colorMode === 'light' ? 'blackAlpha' : 'purple'
                        }
                      >
                        See profile
                      </Button>
                    </Link>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user?.data?.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        colorScheme={
                          colorMode === 'light' ? 'blackAlpha' : 'purple'
                        }
                      >
                        Send Mail
                      </Button>
                    </a>
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
