import React, { useReducer } from 'react';
import { useAuth } from '../../contexts';
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
  Select,
} from '@chakra-ui/react';
import { SkillsCreator } from '../../components';
import { NavLink } from 'react-router-dom';

function JobReferalForm() {
  const initialiState = {
    company_name: '',
    isRemote: false,
    job_description: '',
    job_role: '',
    location: '',
    uid: '',
    skills: [],
  };

  const {
    state: {
      user: { uid },
    },
  } = useAuth();

  const jobReducer = (state, action) => {
    switch (action.type) {
      case 'SET_COMPANY_NAME': {
        return { ...state, company_name: action.payload };
      }
      case 'SET_IS_REMOTE': {
        return { ...state, isRemote: action.payload };
      }
      case 'SET_JOB_DESCRIPTION': {
        return {
          ...state,
          job_description: action.payload,
        };
      }
      case 'SET_LOACTION': {
        return {
          ...state,
          location: action.payload,
        };
      }
      case 'SET_UID': {
        return {
          ...state,
          uid: action.payload,
        };
      }
      default:
        return state;
    }
  };
  const [jobState, jobDispatch] = useReducer(jobReducer, initialiState);
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p={{ base: '2' }}
      h="calc(100vh)"
    >
      <FormControl
        isRequired
        width={{ base: '100%', md: '50%', xl: '25%' }}
        boxShadow="base"
        p="6"
      >
        <FormLabel htmlFor="role">
          Select the Role you are looking for
        </FormLabel>
        <Select id="role" placeholder="Select Role" required>
          <option>Full-Stack Web Developer</option>
          <option>Front-End Developer</option>
          <option>Back-End Developer</option>
        </Select>
        <FormLabel htmlFor="companyName" mt="2" required>
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
          <NavLink to="/profile">
            <Button colorScheme="teal" type="submit">
              Cancel
            </Button>
          </NavLink>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export { JobReferalForm };
