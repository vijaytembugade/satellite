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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export function Card() {
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
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}
          >
            Software Engineer
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'} fontWeight={800}>
              Mirraw
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
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Remote
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Experience : 2 + years
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Skills : Javascript, react, ruby on rails
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            Contact for Referrals
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
