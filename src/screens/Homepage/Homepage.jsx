import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  Card,
  FeaturesGrid,
  FeaturesHomepage,
  Footer,
  Hero,
} from '../../components';
import { useJobContext } from '../../contexts';

const Homepage = () => {
  const { jobsData } = useJobContext();
  return (
    <>
      <Hero />
      <FeaturesHomepage />
      <FeaturesGrid />
      <Box p="16">
        <Flex alignItems="center" justifyContent="center" gap="12" wrap="wrap">
          {jobsData.slice(0, 4).map(job => {
            return <Card key={job.id} job={job} />;
          })}
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export { Homepage };
