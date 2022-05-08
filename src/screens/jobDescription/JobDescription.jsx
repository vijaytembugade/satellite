import { doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { Text, Flex, Box, Badge } from '@chakra-ui/react';

function JobDescription() {
  const { jobID } = useParams();

  const [jobDeatils, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const collectionRef = await doc(db, 'Jobs', jobID);
        const unsb = onSnapshot(collectionRef, doc => {
          setJobDetails(doc.data());
        });
      } catch (err) {
        console.log(err);
      }
    })(jobID);
  }, [jobID]);
  console.log(jobDeatils);
  return (
    <div>
      <Box px={{ base: '4', md: '20' }} pt="10">
        <Box boxShadow="2xl" p="50">
          <Text fontSize="3xl" fontWeight="bold">
            {jobDeatils.job_role}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {jobDeatils.company_name}
          </Text>
          <Text fontSize="xl" my="2">{` Remote Work ${
            jobDeatils.isRemote ? 'is Available' : 'is not Available'
          }`}</Text>
          <Text mt="4" fontWeight="bold">
            Job Description :
          </Text>
          <Text mb="4">{jobDeatils.job_description}</Text>
          <Text mt="4" fontWeight="bold">
            Job Location :
          </Text>
          <Text mt="2" fontSize="semibold">
            {jobDeatils.location}
          </Text>
          <Text fontWeight={'bold'} mt="4">
            Skills :
          </Text>
          {jobDeatils?.skills?.map(skill => {
            return (
              <Badge colorScheme="blue" key={skill} m="2" p="2">
                {skill}
              </Badge>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export { JobDescription };
