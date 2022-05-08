import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useJobContext } from '../../contexts';
import {
  Badge,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const JobListing = () => {
  const { jobsData } = useJobContext();
  const {
    state: { user, profileId },
  } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchParam] = useState(['job_role', 'company_name', 'skills']);

  const giveQueriedJobsData = () => {
    if (searchTerm === '') {
      return jobsData;
    }
    return jobsData.filter(job => {
      return searchParam.some(newItem => {
        return job.data[newItem]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    });
  };

  const finalJobsData = giveQueriedJobsData();

  const handleAddForReferrals = async id => {
    if (user) {
      try {
        const collectionRef = await doc(db, 'Users', profileId);

        const docSnap = await getDoc(collectionRef);
        if (!docSnap.data().appliedJobs.includes(id)) {
          await updateDoc(collectionRef, { appliedJobs: arrayUnion(id) });
        } else {
          throw new Error('Already applied for this job');
        }

        const jobCollectionRef = await doc(db, 'Jobs', id);
        const docJobSnap = await getDoc(jobCollectionRef);
        if (!docJobSnap.data().appliedBy.includes(user.uid)) {
          await updateDoc(jobCollectionRef, {
            appliedBy: arrayUnion(user.uid),
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <Text textAlign={'center'} fontSize={'3xl'} fontWeight="bold" pt={6}>
        Job List
      </Text>
      <Flex alignItems="center" justifyContent="center">
        <InputGroup w={{ base: '90%', md: '50%' }}>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Search by Role, Company or Skill"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </InputGroup>
      </Flex>
      <Flex
        p={{ base: 10, md: 45 }}
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="column"
        gap={4}
      >
        {finalJobsData.map(item => {
          return (
            <Box
              key={item.id}
              width="full"
              bg="gray.100"
              borderBottom={'1px'}
              py={{ base: '6', md: '10' }}
              px={{ base: '6', md: '16' }}
            >
              <Text fontWeight={'bold'}>{item.data.job_role}</Text>
              <Text>
                Organisation : <strong>{item.data.company_name}</strong>
              </Text>
              <Text>Job Description:</Text>
              <Text noOfLines={3}>{item.data.job_description}</Text>

              <Text>
                <Flex width="100%" gap="2" wrap={'wrap'} alignItems="center">
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
              <Flex
                flexDirection={{ base: 'column', md: 'row' }}
                gap="4"
                mt="4"
                w="100%"
              >
                <Button
                  colorScheme="blue"
                  onClick={() => handleAddForReferrals(item.id)}
                >
                  Ask for referals
                </Button>
                <Link to={`/jobDescription/${item.id}`}>
                  <Button colorScheme="blue" w="100%">
                    See More
                  </Button>
                </Link>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </div>
  );
};

export { JobListing };
