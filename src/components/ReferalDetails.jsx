import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box, Flex, Text } from '@chakra-ui/react';

const ReferalDetails = () => {
  const jobs = new Array(1, 2, 3, 4, 5, 7, 1);
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
            p={'50'}
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
                  p={14}
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
