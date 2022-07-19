import { BioSection, BioYear } from './bio'
import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#7a7a7a' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="20%"
      h="100%"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="left"
        justify="space-between"
      >


        <Stack
          direction={{ base: 'row', md: 'column' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="left"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Flex align="left" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
          <BioYear><LinkItem href="/" path={path}>
          Home
            </LinkItem></BioYear>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki" path={path}>
              Getting Started
            </LinkItem>
          </BioSection>
          <BioYear>Operating System</BioYear>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/windows" path={path}>
              Windows
            </LinkItem>
          </BioSection>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/macos" path={path}>
              MacOS
            </LinkItem>
          </BioSection>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/ubuntu" path={path}>
              Ubuntu
            </LinkItem>
          </BioSection>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/arch" path={path}>
              Arch
            </LinkItem>
          </BioSection>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/fedora" path={path}>
              Fedora
            </LinkItem>
          </BioSection>
          <BioSection>
            &nbsp;&nbsp;&nbsp;
            <LinkItem href="/wiki/suse" path={path}>
              OpenSuse
            </LinkItem>
          </BioSection>
          <LinkItem
            target="_blank"
            href="https://github.com/cherryyeti/firestarter-website"
            path={path}
            display="inline-flex"
            alignItems="left"
            style={{ gap: 2 }}
            pl={0}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <ThemeToggleButton />
        </Stack>



        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/wiki" passHref>
                  <MenuItem as={Link}>Setup</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/cherryyeti/firestarter-website"
                >
                  View Source
                </MenuItem>
                <MenuItem>
                <ThemeToggleButton />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
