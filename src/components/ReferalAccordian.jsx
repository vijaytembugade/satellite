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
  Button,
} from '@chakra-ui/react';
import { useJobContext } from '../contexts/job-context';
import { db } from '../firebase/config';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

function ReferalAccordian({ id }) {
  const [apliedByusers, setAplliedBYUser] = useState([]);

  console.log(apliedByusers);

  useEffect(() => {
    (async () => {
      try {
        const collectionRef = await doc(db, 'Jobs', id);
        const docSnap = await getDoc(collectionRef);
        console.log(docSnap.data());

        getDocs(collection(db, 'Users')).then(snapshot => {
          const newData = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }));

          setAplliedBYUser(newData);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
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
                <Box borderBottom={'1px'} p={2} borderColor={'gray.300'}>
                  <Stack direction={'row'}>
                    <Text>User id:</Text>
                    <Text fontWeight={'bold'}>{user.id}</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <Text>User email</Text>
                    <Text fontWeight={'bold'}>{user.data.email}</Text>
                  </Stack>
                  <Button colorScheme={'teal'}>See profile</Button>
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
