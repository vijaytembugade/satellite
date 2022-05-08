import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts';
import useLogout from '../hooks/useLogout';

const Links = [
  { route: '', title: 'Home' },
  { route: 'jobs', title: 'Jobs' },
  { route: 'referalForm', title: 'Referral' },
];

const NavLinkMain = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('purple.100', 'purple.500'),
      }}
      to={`/${children.route}`}
      fontWeight="600"
    >
      <NavLink to={`/${children.route}`}>{children.title}</NavLink>
    </Link>
  );
};

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    state: { user, isLoggedIn },
  } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useLogout();

  return (
    <>
      <Box bg={useColorModeValue('purple.50', 'purple.900')} px={4} py={1}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NavLink to="/">
                <Image
                  src={
                    colorMode === 'light'
                      ? '/assets/logos/logo-light.svg'
                      : '/assets/logos/logo-dark.svg'
                  }
                  h="3.25rem"
                />
              </NavLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLinkMain key={link}>{link}</NavLinkMain>
              ))}
            </HStack>
          </HStack>
          {isLoggedIn && (
            <Flex alignItems={'center'}>
              <Menu>
                <Button onClick={toggleColorMode} mr="6">
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'md'}
                    name={user?.displayName}
                    src={user?.photo}
                  />
                </MenuButton>
                <MenuList>
                  <NavLink to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </NavLink>
                  <MenuDivider />
                  <NavLink to="/chat">
                    <MenuItem>Chat</MenuItem>
                  </NavLink>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
          {!isLoggedIn && (
            <RouterLink to="/auth">
              <Button
                as={'nav'}
                spacing={4}
                colorScheme={'purple'}
                cursor="pointer"
              >
                Login
              </Button>
            </RouterLink>
          )}
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLinkMain
                  to={`/${link.route}`}
                  key={link.route}
                  children={link}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
