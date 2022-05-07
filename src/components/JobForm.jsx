import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  RadioGroup,
  Radio,
  Flex,
  Button,
} from '@chakra-ui/react';
import { SkillsCreator } from './SkillsCreator';

function JobForm() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p={{ base: '2' }}
      h="calc(100vh)"
    >
      <FormControl
        width={{ base: '100%', md: '50%', xl: '25%' }}
        boxShadow="base"
        p="6"
      >
        <FormLabel htmlFor="role">Enter the Role you are looking for</FormLabel>
        <Input id="role" type="text" />
        <FormLabel htmlFor="companyName" mt="2">
          Please enter your Company Name
        </FormLabel>
        <Input id="companyName" type="text" />
        <Textarea placeholder="Enter The Job Description Here" my="4" />
        <FormLabel htmlFor="role">Please Enter the Location</FormLabel>
        <Input id="location" type="location" />
        <FormLabel as="legend" my="2">
          candidate can work Remotely ?
        </FormLabel>
        <RadioGroup>
          <HStack spacing="24px">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </HStack>
        </RadioGroup>
        <SkillsCreator />
        <Flex justifyContent="space-between" p="1" mt="2">
          <Button colorScheme="teal" type="submit">
            Cancel
          </Button>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export { JobForm };
