import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../components';

const card = new Array(1, 2, 3, 4, 5, 6);

const Homepage = () => {
  return (
    <Box p="16">
      <Flex alignItems="center" justifyContent="center" gap="12" wrap="wrap">
        {card.map(item => {
          return <Card key={item} />;
        })}
      </Flex>
    </Box>
  );
};

export { Homepage };
