import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box, Flex, Text, Badge } from '@chakra-ui/react';
import { ReferalAccordian } from './ReferalAccordian';

const ReferalDetails = () => {
  const jobs = new Array(
    1,
    2,
    3,
    4,
    5,
    7,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2
  );
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="4"
      >
        <Box>
          <NavLink to="/referalForm">
            <Button colorScheme="teal" variant="outline">
              Add Job
            </Button>
          </NavLink>
        </Box>
        <Box>
          <Flex
            p={{ base: '6', md: '50' }}
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
                  py={{ base: '6', md: '10' }}
                  px={{ base: '6', md: '16' }}
                >
                  <Text fontSize="3xl">Software Engineer</Text>
                  <Text fontWeight={'bold'}>Company Name</Text>
                  <Text>Job Description</Text>
                  <Text noOfLines={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas voluptatibus totam quibusdam, delectus veritatis
                    officia sunt alias quo sequi dolore saepe hic in a omnis
                    neque harum, tempora nesciunt repellendus!
                  </Text>
                  <Text>
                    <Flex
                      width={'100%'}
                      gap={2}
                      wrap={'wrap'}
                      alignItems="center"
                    >
                      <Text fontWeight={'bold'}>Skills :</Text>
                      <Badge colorScheme="blue">Javascript</Badge>
                      <Badge colorScheme="blue">React</Badge>
                      <Badge colorScheme="blue">NodeJS</Badge>
                      <Badge colorScheme="blue">Ruby On Rails</Badge>
                    </Flex>
                  </Text>
                  <ReferalAccordian />
                  <Flex
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap="4"
                    mt="4"
                  >
                    <Button colorScheme="blue">Delete Job</Button>
                    <Button colorScheme="blue">Edit Job</Button>
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export { ReferalDetails };
