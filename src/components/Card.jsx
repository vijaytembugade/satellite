import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { AtSignIcon, CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';

export function Card({ job }) {
  const {
    data: { company_name, isRemote, job_role, skills, location },
  } = job;

  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        maxH={'600px'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('purple.50', 'purple.900')}
            p={2}
            px={3}
            color={'purple.500'}
            rounded={'full'}
          >
            {job_role}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'} fontWeight={800}>
              {company_name}
            </Text>
          </Stack>
        </Stack>

        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={6}
          py={10}
          width="60"
        >
          <List spacing={3}>
            {isRemote && (
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Remote
              </ListItem>
            )}
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={AtSignIcon} color="green.400" />
                <Text noOfLines={1}>Location: {location}</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon as={InfoOutlineIcon} color="green.400" />
                <Text noOfLines={1}>Skills : {skills.join(', ')}</Text>
              </Flex>
            </ListItem>
          </List>

          <Button mt={10} w={'full'} colorScheme={'purple'}>
            Ask for Referral
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
