import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Button, Box, Flex, Text, Badge } from '@chakra-ui/react';
import { ReferalAccordian } from './ReferalAccordian';
import { useAuth, useJobContext } from '../contexts';
import { deleteDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';

const ReferalDetails = () => {
  const { jobsData, setJobsData } = useJobContext();
  const {
    state: { user },
  } = useAuth();
  const userReferedJobs = jobsData.filter(item => item.data.uid === user?.uid);
  const navigate = useNavigate();

  async function deleteHandler(e, jobID) {
    e.preventDefault();
    try {
      const docRef = await deleteDoc(doc(db, 'Jobs', jobID));
      const collectionRef = collection(db, 'Jobs');
      getDocs(collectionRef).then(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }));
        setJobsData([...newData]);
      });
      navigate('/profile');
      toast.success('Job Deleted Successfully', {
        position: 'bottom-right',
        autoClose: 2000,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
      toast.success('Error Deleting Job', {
        position: 'bottom-right',
        autoClose: 2000,
      });
    }
  }
  return (
    <div>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="4"
        w="100%"
      >
        <Box>
          <NavLink to="/referalForm">
            <Button colorScheme="purple" variant="outline">
              Add Job
            </Button>
          </NavLink>
        </Box>
        {userReferedJobs.length !== 0 ? (
          <Box w="100%">
            <Flex
              p={{ base: '6', md: '25' }}
              alignItems="flex-start"
              justifyContent="flex-start"
              direction="column"
              gap={4}
              w="100%"
            >
              {userReferedJobs.map(item => {
                return (
                  <Box
                    width={'full'}
                    bg="gray.100"
                    key={item}
                    borderBottom={'1px'}
                    py={{ base: '6', md: '10' }}
                    px={{ base: '6', md: '16' }}
                  >
                    <Text fontSize="3xl">{item.data.job_role}</Text>
                    <Text fontWeight={'bold'}>{item.data.company_name}</Text>
                    <Text>Job Description</Text>
                    <Text noOfLines={3}>{item.data.job_description}</Text>
                    <Text>
                      <Flex
                        width={'100%'}
                        gap={2}
                        wrap={'wrap'}
                        alignItems="center"
                      >
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
                    <ReferalAccordian id={item.id} />
                    <Flex
                      flexDirection={{ base: 'column', md: 'row' }}
                      gap="4"
                      mt="4"
                    >
                      <Link to={`/jobDescription/${item.id}`}>
                        <Button colorScheme="purple" w="100%">
                          See More
                        </Button>
                      </Link>
                      <Link to={`/referalForm/${item.id}`}>
                        <Button colorScheme="purple" w="100%">
                          Edit Job
                        </Button>
                      </Link>
                      <Button
                        colorScheme="pink"
                        onClick={e => deleteHandler(e, item.id)}
                      >
                        Delete Job
                      </Button>
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        ) : null}
      </Flex>
    </div>
  );
};

export { ReferalDetails };
