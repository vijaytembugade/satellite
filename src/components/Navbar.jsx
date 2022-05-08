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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts';
import useLogout from '../hooks/useLogout';

const Links = [
  { route: 'home', title: 'Home' },
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
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={`/${children.route}`}
    >
      <NavLink to={`/${children.route}`}>
        {`${children.title}`.toUpperCase()}
      </NavLink>
    </Link>
  );
};

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    state: { user, isLoggedIn },
  } = useAuth();

  const { logout } = useLogout();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
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
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={user?.photo} />
                </MenuButton>
                <MenuList>
                  <NavLink to="/profile">
                    <MenuItem>Profile</MenuItem>
                  </NavLink>
                  <MenuDivider />
                  <MenuItem>
                    <NavLink to="/chat">Chat</NavLink>
                  </MenuItem>
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
                colorScheme={'green.400'}
                bg={'green.400'}
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
