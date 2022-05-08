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
import { ProfileDetails, ReferalDetails, UserDetails } from '../../components';
import { useState } from 'react';
import { useAuth } from '../../contexts';
import { Link as RouterLink} from 'react-router-dom';

export const Profile = () => {
  const {
    state: { user, profileData },
  } = useAuth();

  const cancelHandler = () => setDetails(false);
  const [isDetails, setDetails] = useState(false);

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
          <Flex flex={1} alignSelf="center">
            <Image
              objectFit="cover"
              boxSize="80%"
              borderRadius="100%"
              src={user?.photo}
            />
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
              noOfLines="3"
            >
              {profileData.about}
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              {profileData.skills.slice(0, 4).map(skill => {
                return (
                  <Badge px={2} py={1} fontWeight={'600'} key={skill}>
                    {skill}
                  </Badge>
                );
              })}
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
                <RouterLink to="/chat">
              Start Chat
              </RouterLink>
              </Button>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}
                  _focus={{
                    bg: 'purple.500',
                  }}
                >
                    <RouterLink to={`/share/profile/${user.uid}`}>
                  Share Profile
              </RouterLink>
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
            {!isDetails && (
              <Flex alignItems={'center'} justifyContent={'center'}>
                <Button colorScheme="purple.100" onClick={() => setDetails(true)}>
                  Add Details +
                </Button>
              </Flex>
            )}
            {!isDetails && <UserDetails profileData={profileData} />}
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
