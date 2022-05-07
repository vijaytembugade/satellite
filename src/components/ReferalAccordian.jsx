import React from 'react';
import {
  Accordion,
  Text,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
} from '@chakra-ui/react';

function ReferalAccordian() {
  return (
    <div>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        my="2"
        width={{ base: '100%', md: '40%' }}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Following People have Asked for Referal
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>rushi@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
            <Text>Ram@gmail.com</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { ReferalAccordian };
