import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const ProfileDetails = ({close}) => {
  return (
    <Flex justify="center" alignItems="center" direction="column" gap="4">
      <FormControl width={{ base: '100%', md: '50%', xl: '25%' }}>
        <Text fontSize="2xl">Enter Social Accounts</Text>
        <FormLabel>
          <Text fontSize="1xl">About</Text>
          <Input placeholder="tell us more about yourself" isRequired />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Github</Text>
          <Input placeholder="Enter Github Link" isRequired />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">LinkedIn</Text>
          <Input placeholder="Enter LinkedIn Link" isRequired />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">PeerList</Text>
          <Input placeholder="Enter PeerList Link" isRequired />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Twitter</Text>
          <Input placeholder="Enter Twitter Link" isRequired />
        </FormLabel>

        <Text fontSize="2xl">Add 3 Projects</Text>
        <FormLabel>
          <Text fontSize="1xl">First </Text>
          <Input placeholder="Enter First Project Link" />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Second</Text>
          <Input placeholder="Enter Second Link" isRequired />
        </FormLabel>
        <FormLabel>
          <Text fontSize="1xl">Third</Text>
          <Input placeholder="Enter Third Link" isRequired />
        </FormLabel>
        <Flex gap="10" mt="1rem">
          <Button colorScheme="teal" variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};
