import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProfileDetails, ReferalDetails ,UserDetails } from '../../components';
import { useState } from 'react';
import { useAuth } from '../../contexts';

export const Profile = () => {
  const {
    state: { user },
  } = useAuth();

  const cancelHandler = () => setDetails(false);
  const [isDetails, setDetails] = useState(false);
  const [userDetailsPresent, setUserDetails] = useState(true);
  return (
    <div>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={user?.photo} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {user?.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {user?.email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              Actress, musician, songwriter and artist. PM for work inquires or
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}
              >
                #music
              </Badge>
            </Stack>

            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Message
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                Follow
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em" mt="2rem">
          <Tab>Profile Details</Tab>
          <Tab>Post a Referral</Tab>
        </TabList>
        <TabPanels>
          {/* TAB 1 */}
          <TabPanel>
            {userDetailsPresent && <UserDetails />}
            {!isDetails && (
              <Button colorScheme="blue" onClick={() => setDetails(true)}>
                Add Details +
              </Button>
            )}
            {isDetails && <ProfileDetails close={cancelHandler} />}
          </TabPanel>
          <TabPanel>
            <ReferalDetails />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
