import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = props => {
  const { colorMode } = useColorMode();
  return (
    <Image
      src={
        colorMode === 'light'
          ? '/assets/logos/logo-light.svg'
          : '/assets/logos/logo-dark.svg'
      }
      w="60%"
    />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('purple.50', 'purple.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2022 Aimergers. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link to={'/jobs'}>Jobs</Link>
            <Link to={'/referalForm'}>Referrals Form</Link>
            <Link to={'/'}>Contact us</Link>
            <Link to={'/'}>Pricing</Link>
            <Link to={'/'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link to={'/'}>Help Center</Link>
            <Link to={'/'}>Terms of Service</Link>
            <Link to={'/'}>Legal</Link>
            <Link to={'/'}>Privacy Policy</Link>
            <Link to={'/'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                colorScheme={'purple'}
                aria-label="Subscribe"
                icon={<EmailIcon />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
