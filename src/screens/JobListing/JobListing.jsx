import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const jobs = [1, 2, 3, 4, 5];

const JobListing = () => {
  return (
    <div>
      <Text textAlign={'center'} fontSize={'3xl'} fontWeight="bold" pt={6}>
        Job List
      </Text>
      <Flex
        p={{ base: 10, md: 45 }}
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="column"
        gap={4}
      >
        {jobs.map(item => {
          return (
            <Box
              width={'full'}
              bg="gray.100"
              key={item}
              borderBottom={'1px'}
              py={{ base: 6, md: 10 }}
              px={{ base: 6, md: 16 }}
            >
              <Text fontWeight={'bold'}>Sowftware Engineer</Text>
              <Text>
                Organisation : <strong>Mirraw</strong>
              </Text>
              <Text>Job Description:</Text>
              <Text noOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptatibus totam quibusdam, delectus veritatis officia sunt
                alias quo sequi dolore saepe hic in a omnis neque harum, tempora
                nesciunt repellendus!
              </Text>

              <Text>
                <Flex width={'100%'} gap={2} wrap={'wrap'} alignItems="center">
                  <Text fontWeight={'bold'}>Skills :</Text>
                  <Badge colorScheme="blue">Javascript</Badge>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="blue">NodeJS</Badge>
                  <Badge colorScheme="blue">Ruby On Rails</Badge>
                </Flex>
              </Text>

              <Button mt={4} colorScheme="blue">
                Ask for referals
              </Button>
            </Box>
          );
        })}
      </Flex>
    </div>
  );
};

export { JobListing };
