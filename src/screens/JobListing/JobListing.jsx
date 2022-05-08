import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useJobContext } from '../../contexts';

const JobListing = () => {
  const { jobsData } = useJobContext();
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
        {jobsData.map(item => {
          return (
            <Box
              key={item.id}
              width={'full'}
              bg="gray.100"
              borderBottom={'1px'}
              py={{ base: 6, md: 10 }}
              px={{ base: 6, md: 16 }}
            >
              <Text fontWeight={'bold'}>{item.data.job_role}</Text>
              <Text>
                Organisation : <strong>{item.data.company_name}</strong>
              </Text>
              <Text>Job Description:</Text>
              <Text noOfLines={3}>{item.data.job_description}</Text>

              <Text>
                <Flex width={'100%'} gap={2} wrap={'wrap'} alignItems="center">
                  <Text fontWeight={'bold'}>Skills :</Text>
                  {item.data.skills.map(skill => {
                    return (
                      <Badge colorScheme="blue" key={skill}>
                        {skill}
                      </Badge>
                    );
                  })}
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
