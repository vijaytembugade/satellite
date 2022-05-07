import { Box } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../components';

const card = new Array(1, 2, 3, 4, 5, 6);

const Homepage = () => {
  return (
    <div>
      <Box>
        {card.map(item => {
          return <Card key={item} />;
        })}
      </Box>
    </div>
  );
};

export { Homepage };
