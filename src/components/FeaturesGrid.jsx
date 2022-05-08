import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'purple'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export function FeaturesGrid() {
  return (
    <Box
      p={4}
      marginLeft={{ base: '1rem', sm: '5rem', md: '7.5rem' }}
      marginRight={{ base: '1rem', sm: '5rem', md: '7.5rem' }}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
        <Feature
          icon={<i class="fa-solid fa-envelope-open"></i>}
          title={'Mail Access'}
          text={'Access the emails arround interested folks.'}
        />
        <Feature
          icon={<i class="fa-solid fa-comment"></i>}
          title={'Chat communication'}
          text={'Direct Communication platform'}
        />
        <Feature
          icon={<i class="fa-solid fa-user"></i>}
          title={'Profile Distinguishing'}
          text={'Build your profile accessible to everyone'}
        />
      </SimpleGrid>
    </Box>
  );
}
