import { AtSignIcon, ChatIcon, CheckIcon } from '@chakra-ui/icons';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export function FeaturesHomepage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            We Propose
          </Text>
          <Heading>A Referral Community 🦄</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            All in one solution to turn your resumes into referrals!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={CheckIcon} color={'yellow.500'} w={4} h={4} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Referrals Anytime'}
            />
            <Feature
              icon={<Icon as={AtSignIcon} color={'green.500'} w={4} h={4} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Monitor your portfolio'}
            />
            <Feature
              icon={<Icon as={ChatIcon} color={'purple.500'} w={4} h={4} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Community over connections!'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src="/assets/svgs/online-world.svg"
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
